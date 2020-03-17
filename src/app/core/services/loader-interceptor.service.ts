import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {HideSpinner, ShowSpinner} from '../../layout/store/layout.actions';

@Injectable()
export class LoaderInterceptor {
  constructor(private store: Store<AppState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isShowSpinner = !request.headers.get('no-spinner');
    if (isShowSpinner) {
      this.store.dispatch(new ShowSpinner());
    }

    return next.handle(request).pipe(finalize(() => {
      if (isShowSpinner) {
        this.store.dispatch(new HideSpinner());
      }
    }));
  }
}
