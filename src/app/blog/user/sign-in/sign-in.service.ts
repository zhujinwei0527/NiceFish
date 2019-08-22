import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class SignInService {
  // public userLoginURL = "/mock-data/user-login-mock.json";
  public userLoginURL = "/auth/shiro/login";
  public subject: Subject<any> = new Subject<any>();

  constructor(public httpClient: HttpClient) {
  }

  public get currentUser(): Observable<any> {
    return this.subject.asObservable();
  }

  public login(user:any) {
    //TODO:passowrd用MD5加密之后传输
    return this.httpClient
      .post(this.userLoginURL,{
        userName:user.userName,
        password:user.password,
        validateCode : user.captcha,
        rememberMe:user.rememberMe
      })
      .subscribe(
        data => {
          console.log("login success>" + data);
          user = data;
          console.log("user object>" + user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        },
        error => {
          console.error(error);
        }
      );
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
