import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { User } from '../model/user-model';

@Injectable()
export class SignUpService {
    public signUpURL = "mock-data/sign-up-mock.json";
    public testEmailURL = "";
    public subject: Subject<User> = new Subject<User>();

    constructor(public http: Http) {
    }

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public signup(user: User) {
        return this.http
            .get(this.signUpURL)
            .pipe(map((response: Response) => {
                let user = response.json();
                localStorage.setItem("currentUser", JSON.stringify(user));
                this.subject.next(user);
            }));
    }

    public testEmail(email: string) {
        return this.http.get(this.testEmailURL)
            .pipe(map((response: Response) => response.json()));
    }
}