import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5';
import { User } from '../model/user-model';

@Injectable()
export class SignUpService {
    public subject: Subject<User> = new Subject<User>();

    constructor(public httpClient: HttpClient) {
    }

    public get currentUser(): Observable<User> {
        return this.subject.asObservable();
    }

    public signup(user: User) {
        return this.httpClient.post(
            "http://localhost:9002/users/create",
            {
                email: user.email,
                password: new Md5().appendStr(user.password).end()
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            });
    }
}