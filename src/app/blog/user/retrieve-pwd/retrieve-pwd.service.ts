import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class RetrievePwdService {
    constructor(public httpClient: HttpClient) {
    }

    public sendValidationEmail(email: string): Observable<any> {
        // {
        //     "message": "邮件发送成功，请登录邮箱查看。"
        // }
        return null;
    }
}