import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Visitor} from '../models/visitor.model';
import {
  CREATE_VISITOR_START,
  CreateVisitorStart,
  CreateVisitorSuccess,
  DELETE_VISITOR_START,
  DeleteVisitorStart,
  DeleteVisitorSuccess,
  FETCH_VISITOR_START,
  FETCH_VISITORS_START,
  FetchVisitorsSuccess,
  FetchVisitorStart,
  FetchVisitorSuccess,
  UPDATE_VISITOR_START,
  UpdateVisitorStart,
  UpdateVisitorSuccess
} from './visitor.actions';
import {CatchMessageAlert} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';


@Injectable()
export class VisitorEffects {
  @Effect()
  fetchVisitors = this.actions$.pipe(
    ofType(FETCH_VISITORS_START),
    switchMap(() => this.http.get<Visitor[]>('/visitor/visitors')
      .pipe(
        map((visitors: Visitor[]) => new FetchVisitorsSuccess(visitors)),
        catchError(err => of(new CatchMessageAlert({module: 'Visitor', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchVisitor = this.actions$.pipe(
    ofType(FETCH_VISITOR_START),
    switchMap(
      (fetchVisitorStart: FetchVisitorStart) => this.http.get<Visitor>(`/visitor/visitors/${fetchVisitorStart.payload}`)
        .pipe(
          map((visitor: Visitor) => new FetchVisitorSuccess(visitor)),
          catchError(err => of(new CatchMessageAlert({module: 'Visitor', message: handleError(err)})))
        ))
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
          catchError(err => of(new CatchMessageAlert({module: 'Visitor', message: handleError(err)})))
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
          catchError(err => of(new CatchMessageAlert({module: 'Visitor', message: handleError(err)})))
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
          catchError(err => of(new CatchMessageAlert({module: 'Visitor', message: handleError(err)})))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
  }
}
