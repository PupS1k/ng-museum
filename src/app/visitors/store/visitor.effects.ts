import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
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
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {UpdateGuideStart} from '../../guides/store/guide.actions';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {UpdateExhibitStart} from '../../exhibits/store/exhibit.actions';
import {selectFavouriteTours, selectUserId, selectVisitorInfoId} from '../../profile/store/profile.selectors';
import {selectVisitorId} from './visitor.selectors';


@Injectable()
export class VisitorEffects {
  @Effect()
  fetchVisitors = this.actions$.pipe(
    ofType(FETCH_VISITORS_START),
    switchMap(() => this.http.get<Visitor[]>('/visitor/visitors')
      .pipe(
        map((visitors: Visitor[]) => new FetchVisitorsSuccess(visitors)),
        catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchVisitor = this.actions$.pipe(
    ofType(FETCH_VISITOR_START),
    switchMap(
      (fetchVisitorStart: FetchVisitorStart) => this.http.get<Visitor>(`/visitor/visitors/${fetchVisitorStart.payload}`)
        .pipe(
          map((visitor: Visitor) => new FetchVisitorSuccess(visitor)),
          catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
        ))
  );

  @Effect()
  updateVisitor = this.actions$.pipe(
    ofType(UPDATE_VISITOR_START),
    withLatestFrom(this.store),
    switchMap(([updateVisitorStart, state]: [UpdateVisitorStart, AppState]) => {
      const id = selectVisitorId(state) || selectUserId(state);
      console.log(id);
      console.log(selectVisitorId(state));
      console.log(selectUserId(state));
      return this.http.post<Visitor>(
          `/visitor/visitors/update/${id}`,
        {
          ...updateVisitorStart.payload,
          visitorId: id,
          tourEntitySet: selectFavouriteTours(state)
        }
        )
          .pipe(
            map((visitor: Visitor) => new UpdateVisitorSuccess(visitor)),
            catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
          );
      }
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
          catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
        )
    )
  );

  @Effect()
  createVisitor = this.actions$.pipe(
    ofType(CREATE_VISITOR_START),
    switchMap(
      (createVisitorStart: CreateVisitorStart) => this.http.post<Visitor>(
        '/visitor/visitors/add',
        {
          ...createVisitorStart.payload,
          visitorId: ''
        }
      )
        .pipe(
          map((visitor: Visitor) => new CreateVisitorSuccess(visitor)),
          catchError(err => of(new ShowMessage({module: 'Visitor', message: handleError(err)})))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }
}
