import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Md5 } from 'ts-md5';

@Injectable()
export class SignInService {
  public subject: Subject<any> = new Subject<any>();

  constructor(public httpClient: HttpClient) { }

  public get currentUser(): Observable<any> {
    return this.subject.asObservable();
  }

  public signIn(user: any) {
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
