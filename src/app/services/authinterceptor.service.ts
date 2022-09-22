import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor{
  constructor(private auth:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token')
    console.log("token ----------> inter", token)
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(req)
  }
}
