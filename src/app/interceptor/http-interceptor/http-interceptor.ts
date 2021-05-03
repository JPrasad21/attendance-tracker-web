import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Injectable()
export class HttpTokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private route: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return next.handle(request).pipe(
      tap(
        _ => { },
        error => {
          if (error.status === 401 && window.location.pathname != '/') {
            this.authService.logout();
          }
        }
      )
    );
  }
}
