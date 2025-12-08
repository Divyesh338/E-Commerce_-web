import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      retry(3),
      map(res => {
        if (res instanceof HttpResponse) {
          debugger;
          return res;
        }
        debugger;
        return res;
      }),
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';
        if (err.error instanceof ErrorEvent) {
          errorMsg = `Error: ${err.message}`;
        } else {
          errorMsg = `Error: ${err.message} Error Status: ${err.status}`;
        }
        return throwError(() => Error(err.message))
      })
    )
  }
}
