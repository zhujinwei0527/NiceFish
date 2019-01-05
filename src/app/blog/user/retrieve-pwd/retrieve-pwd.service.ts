import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class RetrievePwdService {
    constructor(public http: Http) { }

    public sendValidationEmail(email: string): Observable<any> {
        // {
        //     "message": "邮件发送成功，请登录邮箱查看。"
        // }
        return null;
    }
}