import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * 整个Post模块都共用这个Service来进行前后端交互
 * @author 大漠穷秋
 */
@Injectable()
export class PostService {
    constructor(public httpClient: HttpClient) { }

    public getPostList(page: number = 1): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9500/blog/post-list/${page}`,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public getPostDetail(id: string): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9500/blog/post-detail/${id}`
        );
    }

    public writePost(post: any): Observable<any> {
        return this.httpClient.post(
            "http://localhost:9500/blog/write-post",
            {
                title: post.title,
                content: post.content,
                userId: post.userId
            },
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        )
    }
}
