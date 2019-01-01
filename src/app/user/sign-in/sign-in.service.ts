import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../model/user-model";

@Injectable()
export class SignInService {
  public signInURL = "mock-data/sign-in-mock.json";
  public subject: Subject<User> = new Subject<User>();

  constructor(public httpClient: HttpClient) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public signIn(user: User) {
    let url = "http://localhost:9001/oauth/token";
    let data = `username=${user.userName}&password=${user.password}&grant_type=password`;
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa("fish:fish")
    });

    let observable = this.httpClient.post(url, data, {
      headers: headers
    });

    observable.subscribe(
      (data: any) => {
        console.log(data);
        if (data && data.first_name && data.last_name && data.access_token && data.refresh_token) {
          let userObj = {
            id: data.id,
            userName: data.first_name,
            access_token: data.access_token,
            refresh_token: data.refresh_token
          };
          localStorage.setItem("currentUser", JSON.stringify(userObj));
          this.subject.next(Object.assign({}, userObj));
        }
      },
      error => {
        console.log(error);
      }
    );
    return observable;
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
