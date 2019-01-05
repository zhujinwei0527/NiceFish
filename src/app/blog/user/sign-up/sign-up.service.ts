import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable()
export class SignUpService {
    public subject: Subject<any> = new Subject<any>();

    constructor(public httpClient: HttpClient) {
    }

    public get currentUser(): Observable<any> {
        return this.subject.asObservable();
    }

    public signup(user: any) {
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