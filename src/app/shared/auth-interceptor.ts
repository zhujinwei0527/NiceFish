import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

/**
 * 全局HTTP拦截器，自动向所有HTTP请求头上加Authorization
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //auth类的请求不做任何处理
        if (request.url.indexOf("auth") != -1) {
            return next.handle(request.clone());
        }
        if (!localStorage.getItem("currentUser")) {
            return next.handle(request.clone());
        }
        const clonedReq = request.clone({
            headers: request.headers.set("Authorization", "bearer " + JSON.parse(localStorage.getItem("currentUser")).access_token)
        });
        return next.handle(clonedReq).pipe(
            tap(
                success => { },
                error => {
                    if (error.status == 401) {
                        this.router.navigateByUrl("signin");
                    }
                }
            )
        );
    }
}
