import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class CommentTableService {
    constructor(public httpClient: HttpClient) { }

    public getCommentByUserIdAndPaging(page: number, userId: number): Observable<any> {
        return this.httpClient.post(
            `http://localhost:9003/manage/comment-table`,
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