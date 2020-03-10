import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {Visitor} from '../models/visitor.model';
import {
  CREATE_VISITOR_START,
  CREATE_VISITOR_SUCCESS, CreateVisitorStart, CreateVisitorSuccess, DELETE_VISITOR_START, DeleteVisitorStart, DeleteVisitorSuccess,
  FETCH_VISITOR_START,
  FETCH_VISITORS_START,
  FetchVisitorsSuccess,
  FetchVisitorStart,
  FetchVisitorSuccess, UPDATE_VISITOR_START, UPDATE_VISITOR_SUCCESS, UpdateVisitorFail,
  UpdateVisitorStart, UpdateVisitorSuccess
} from './visitor.actions';




@Injectable()
export class VisitorEffects {
  @Effect()
  fetchVisitors = this.actions$.pipe(
    ofType(FETCH_VISITORS_START),
    switchMap(() => this.http.get<Visitor[]>('/visitor/visitors')
      .pipe(map((visitors: Visitor[]) => new FetchVisitorsSuccess(visitors))))
  );

  @Effect()
  fetchVisitor = this.actions$.pipe(
    ofType(FETCH_VISITOR_START),
    switchMap(
      (fetchVisitorStart: FetchVisitorStart) => this.http.get<Visitor>(`/visitor/visitors/${fetchVisitorStart.payload}`)
        .pipe(map((visitor: Visitor) => new FetchVisitorSuccess(visitor))))
  );

  @Effect()
  updateVisitor = this.actions$.pipe(
    ofType(UPDATE_VISITOR_START),
    switchMap(
      (updateVisitorStart: UpdateVisitorStart) => this.http.post<Visitor>(
        `/visitor/visitors/update/${updateVisitorStart.payload.visitorId}`,
        updateVisitorStart.payload
      )
        .pipe(
          map((visitor: Visitor) => new UpdateVisitorSuccess(visitor)),
          catchError(this.handleError)
        )
    )
  );

  @Effect()
  deleteVisitor = this.actions$.pipe(
    ofType(DELETE_VISITOR_START),
    switchMap(
      (deleteVisitorStart: DeleteVisitorStart) => this.http.post(
        `/visitor/visitors/delete/${deleteVisitorStart.payload.visitorId}`,
        deleteVisitorStart.payload
      )
        .pipe(
          map(() => new DeleteVisitorSuccess(deleteVisitorStart.payload.visitorId)),
          catchError(this.handleError)
        )
    )
  );

  @Effect()
  createVisitor = this.actions$.pipe(
    ofType(CREATE_VISITOR_START),
    switchMap(
      (createVisitorStart: CreateVisitorStart) => this.http.post<Visitor>(
        '/visitor/visitors/add',
        createVisitorStart.payload
      )
        .pipe(
          map((visitor: Visitor) => new CreateVisitorSuccess(visitor)),
          catchError(this.handleError)
        )
    )
  );

  @Effect({dispatch: false})
  updateOrCreateVisitorRedirect = this.actions$.pipe(
    ofType(UPDATE_VISITOR_SUCCESS, CREATE_VISITOR_SUCCESS),
    tap(() => this.router.navigate(['/visitors']))
  );


  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return of(new UpdateVisitorFail(errorMessage));
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = 'Email or password is not correct';
        break;
    }

    return of(new UpdateVisitorFail(errorMessage));
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {
  }
}
