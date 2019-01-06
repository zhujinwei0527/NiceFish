import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserTableService {
    constructor(public httpClient: HttpClient) { }

    public getUserListByPaging(page: number): Observable<any> {
        return this.httpClient.post(
            `http://localhost:9002/users/user-table`,
            {
                page: page
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }
}