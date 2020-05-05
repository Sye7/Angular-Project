import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { HardcodedAuthService } from '../hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthHeaderService implements HttpInterceptor {
 
  constructor(private basicAuthService: HardcodedAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicHeaderString && username) {

      request = request.clone({
        setHeaders: {
          Authorization: basicHeaderString
        }
      })
    }

    return next.handle(request);

  }

}
