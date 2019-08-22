import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http"

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
    //TODO:passowrd用MD5加密之后传输，服务端需要做一些对应的处理
    return this.httpClient
      .post(
        this.userLoginURL,
        `userName=${user.userName}&password=${user.password}&validateCode=${user.validateCode}&rememberMe=${user.rememberMe}`,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
          })
        }
      )
      .subscribe(
        (data:any) => {
          if(data&&data.success) {
            console.log("login success>");
            console.log("user object>" + user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
          } else {
            alert("登录失败");
          }
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
