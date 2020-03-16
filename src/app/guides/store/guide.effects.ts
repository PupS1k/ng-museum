import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';

import {
  CREATE_GUIDE_START, CreateGuideStart, CreateGuideSuccess,
  DELETE_GUIDE_START, DeleteGuideStart, DeleteGuideSuccess,
  FETCH_GUIDE_START, FETCH_GUIDES_START,
  FetchGuidesSuccess,
  FetchGuideStart,
  FetchGuideSuccess,
  UPDATE_GUIDE_START,
  UpdateGuideStart, UpdateGuideSuccess
} from './guide.actions';
import {Guide} from '../models/guide.model';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {selectGuideId} from './guide.selectors';
import {selectUserId} from '../../profile/store/profile.selectors';



@Injectable()
export class GuideEffects {
  @Effect()
  fetchGuides = this.actions$.pipe(
    ofType(FETCH_GUIDES_START),
    switchMap(() => this.http.get<Guide[]>('/guide/guides')
      .pipe(
        map((guides: Guide[]) => new FetchGuidesSuccess(guides)),
        catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchGuide = this.actions$.pipe(
    ofType(FETCH_GUIDE_START),
    switchMap(
      (fetchGuideStart: FetchGuideStart) => this.http.get<Guide>(`/guide/guides/${fetchGuideStart.payload}`)
        .pipe(
          map((guide: Guide) => new FetchGuideSuccess(guide)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
        ))
  );

  @Effect()
  updateGuide = this.actions$.pipe(
    ofType(UPDATE_GUIDE_START),
    withLatestFrom(this.store),
    switchMap(([updateGuideStart, state]: [UpdateGuideStart, AppState]) => {
      const id = selectGuideId(state) || selectUserId(state);
      return this.http.post<Guide>(
          `/guide/guides/update/${id}`,
          {
            ...updateGuideStart.payload,
            guideId: id
          }
        )
          .pipe(
            map((guide: Guide) => new UpdateGuideSuccess(guide)),
            catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
          );
      }
    )
  );

  @Effect()
  deleteGuide = this.actions$.pipe(
    ofType(DELETE_GUIDE_START),
    switchMap(
      (deleteGuideStart: DeleteGuideStart) => this.http.get<Guide>(`/guide/guides/delete/${deleteGuideStart.payload}`)
        .pipe(
          map(() => new DeleteGuideSuccess(deleteGuideStart.payload)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
        )
    )
  );

  @Effect()
  createGuide = this.actions$.pipe(
    ofType(CREATE_GUIDE_START),
    switchMap(
      (createGuideStart: CreateGuideStart) => this.http.post<Guide>(
        '/guide/guides/add',
        {guideId: '', ...createGuideStart.payload}
      )
        .pipe(
          map((guide: Guide) => new CreateGuideSuccess(guide)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
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
