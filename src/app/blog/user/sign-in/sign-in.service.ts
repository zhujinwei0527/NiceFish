import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http"
import { MessageService } from "primeng/api";

@Injectable()
export class SignInService {
  // public loginURL = "/mock-data/user-login-mock.json";
  public loginURL = "/auth/shiro/login";
  public logoutURL="/auth/shiro/logout";
  public subject: Subject<any> = new Subject<any>();

  constructor(public httpClient: HttpClient,
    private messageService: MessageService) {
  }

  public get currentUser(): Observable<any> {
    return this.subject.asObservable();
  }

  public login(user:any) {
    //TODO:passowrd用MD5加密之后传输，服务端需要做一些对应的处理
    return this.httpClient
      .post(
        this.loginURL,
        `userName=${user.userName}&password=${user.password}&validateCode=${user.captcha}&rememberMe=${user.rememberMe}`,
        {
          headers: new HttpHeaders({
            "Content-Type": "application/x-www-form-urlencoded",
          })
        }
      )
      .subscribe(
        (data:any) => {
          if(data.success) {
            console.log("login success>");
            console.log("user object>" + user);
            window.localStorage.setItem("currentUser", JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
          } else {
            this.messageService.add({ severity: "error", summary: "Fail Message", detail: data.msg, life: 3000 });
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  public logout(): void {
    this.httpClient
    .get(this.logoutURL)
    .subscribe(
      (data:any) => {
        console.log(data);
        window.localStorage.removeItem("currentUser");
        this.subject.next(Object.assign({}));
        this.messageService.add({ severity: "success", summary: "Success Message", detail:"退出成功", life: 1000 });
      },
      error => {
        console.error(error);
      }
    );
  }
}
