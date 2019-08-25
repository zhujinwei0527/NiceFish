import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SignUpService {
    public signUpURL = "/mock-data/user-register-mock.json";
    public testEmailURL = "";
    public subject: Subject<any> = new Subject<any>();

    constructor(public httpClient: HttpClient) {
    }

    public get currentUser(): Observable<any> {
        return this.subject.asObservable();
    }

    public signup(user) {
        console.log(user);
        //TODO:user.password用MD5加密后传输
        return this.httpClient.post(
            "/auth/user/register",
            {
                userName:user.email,
                nickName:user.nickName,
                password:user.password,
                email:user.email,
                captcha:user.captcha
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public testEmail(): Observable<any> {
        return this.httpClient.get(this.testEmailURL);
    }
}
