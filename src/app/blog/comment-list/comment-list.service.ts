import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CommentListService {
    constructor(public httpClient: HttpClient) {
    }

    public getCommentList(postId, page = 1): Observable<any> {
        return this.httpClient.get(
            `/cms/comment/post-id/${postId}/page/${page}`
        );
    }

    public writeComment(comment: any): Observable<any> {
        return this.httpClient.post(
            `/cms/comment/write-comment`,
            comment,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }
}
