import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  CREATE_GUIDE_START, CREATE_GUIDE_SUCCESS, CreateGuideStart, CreateGuideSuccess,
  DELETE_GUIDE_START, DeleteGuideStart, DeleteGuideSuccess,
  FETCH_GUIDE_START, FETCH_GUIDES_START,
  FetchGuidesSuccess,
  FetchGuideStart,
  FetchGuideSuccess,
  UPDATE_GUIDE_START, UPDATE_GUIDE_SUCCESS, UpdateGuideFail,
  UpdateGuideStart, UpdateGuideSuccess
} from './guide.actions';
import {Guide} from '../models/guide.model';



@Injectable()
export class GuideEffects {
  @Effect()
  fetchGuides = this.actions$.pipe(
    ofType(FETCH_GUIDES_START),
    switchMap(() => this.http.get<Guide[]>('/guide/guides')
      .pipe(map((guides: Guide[]) => new FetchGuidesSuccess(guides))))
  );

  @Effect()
  fetchGuide = this.actions$.pipe(
    ofType(FETCH_GUIDE_START),
    switchMap(
      (fetchGuideStart: FetchGuideStart) => this.http.get<Guide>(`/guide/guides/${fetchGuideStart.payload}`)
        .pipe(map((guide: Guide) => new FetchGuideSuccess(guide))))
  );

  @Effect()
  updateGuide = this.actions$.pipe(
    ofType(UPDATE_GUIDE_START),
    switchMap(
      (updateGuideStart: UpdateGuideStart) => this.http.post<Guide>(
        `/guide/guides/update/${updateGuideStart.payload.guideId}`,
        updateGuideStart.payload
      )
        .pipe(
          map((guide: Guide) => new UpdateGuideSuccess(guide)),
          catchError(this.handleError)
        )
    )
  );

  @Effect()
  deleteGuide = this.actions$.pipe(
    ofType(DELETE_GUIDE_START),
    switchMap(
      (deleteGuideStart: DeleteGuideStart) => this.http.get<Guide>(`/guide/guides/delete/${deleteGuideStart.payload}`)
        .pipe(
          map(() => new DeleteGuideSuccess(deleteGuideStart.payload)),
          catchError(this.handleError)
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
          catchError(this.handleError)
        )
    )
  );


  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return of(new UpdateGuideFail(errorMessage));
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

    return of(new UpdateGuideFail(errorMessage));
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {
  }
}
