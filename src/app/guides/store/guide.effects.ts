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
import {GuideForm} from '../models/guide-form.model';
import {ApiGuidesService} from '../services/api-guides.service';



@Injectable()
export class GuideEffects {
  @Effect()
  fetchGuides = this.actions$.pipe(
    ofType(FETCH_GUIDES_START),
    switchMap(() => this.apiGuidesService.getGuides()
      .pipe(
        map((guides: Guide[]) => new FetchGuidesSuccess(guides)),
        catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchGuide = this.actions$.pipe(
    ofType<FetchGuideStart>(FETCH_GUIDE_START),
    map(action => action.payload),
    switchMap((guideId) => this.apiGuidesService.getGuide(guideId)
        .pipe(
          map((guide: Guide) => new FetchGuideSuccess(guide)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
        ))
  );

  @Effect()
  updateGuide = this.actions$.pipe(
    ofType<UpdateGuideStart>(UPDATE_GUIDE_START),
    map(action => action.payload),
    withLatestFrom(this.store),
    switchMap(([updatingGuide, state]: [GuideForm, AppState]) => this.apiGuidesService
      .updateGuide(updatingGuide, selectGuideId(state) || selectUserId(state))
      .pipe(
            map((guide: Guide) => new UpdateGuideSuccess(guide)),
            catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
          )
    )
  );

  @Effect()
  deleteGuide = this.actions$.pipe(
    ofType<DeleteGuideStart>(DELETE_GUIDE_START),
    map(action => action.payload),
    switchMap((guideId) => this.apiGuidesService.deleteGuide(guideId)
        .pipe(
          map(() => new DeleteGuideSuccess(guideId)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
        )
    )
  );

  @Effect()
  createGuide = this.actions$.pipe(
    ofType<CreateGuideStart>(CREATE_GUIDE_START),
    switchMap((newGuide) => this.apiGuidesService.createGuide(newGuide)
        .pipe(
          map((guide: Guide) => new CreateGuideSuccess(guide)),
          catchError(err => of(new ShowMessage({module: 'Guide', message: handleError(err)})))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private apiGuidesService: ApiGuidesService,
    private store: Store<AppState>
  ) {
  }
}
