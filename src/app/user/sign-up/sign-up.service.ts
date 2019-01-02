import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
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
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        let observable = this.httpClient.post("http://localhost:9002/users/create", {
            email: user.email,
            password: user.password
        }, { headers: headers });

        observable.subscribe(
            (response: any) => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
        return observable;
    }
}