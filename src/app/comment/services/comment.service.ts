import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {
    constructor(public httpClient: HttpClient) {

    }

    public getCommentList(postId: string, page: number = 1): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9003/blog/comment/${postId}/page/${page}`
        );
    }
}