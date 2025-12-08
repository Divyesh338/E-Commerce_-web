import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../components/auth/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private _auth: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request: any;
    let currentUser: any;
    let isLoggedIn: Boolean;

    this._auth.isLoggedIn$.subscribe((res) => {
      isLoggedIn = res

      if (isLoggedIn) {
        this._auth.isLoggedIn$.subscribe((res) => {
          currentUser = res;
          request = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${currentUser.token}`
            }
          })
        })
      }
    })
    return next.handle(request != undefined ? request : req);
  }
}
