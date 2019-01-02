import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Md5 } from 'ts-md5';
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
    return this.httpClient.post(
      "http://localhost:9001/oauth/token",
      `username=${user.userName}&password=${new Md5().appendStr(user.password).end()}&grant_type=password`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa("fish:fish")
        })
      });
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
