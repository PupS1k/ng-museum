import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from './loader.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor {
  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isShowSpinner = !request.headers.get('no-spinner') && !this.loaderService.isShow;
    if (isShowSpinner) {
      this.loaderService.showSpinner();
    }

    return next.handle(request).pipe(finalize(() => {
      if (isShowSpinner) {
        this.loaderService.hideSpinner();
      }
    }));
  }
}
