import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class PostTableService {
    constructor(public httpClient: HttpClient) { }

    public getPostByUserIdAndPaging(page: number, userId: number): Observable<any> {
        return this.httpClient.post(
            `http://localhost:9500/blog/manage/post-table`,
            {
                page: page,
                userId: userId
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }
}