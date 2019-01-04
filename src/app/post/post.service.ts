import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Post } from './post-model';

@Injectable()
export class PostService {
    public postListURL = 'mock-data/postlist-mock.json';

    constructor(public httpClient: HttpClient) { }

    public getPostList(page: number = 1): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9003/blog/post-list/${page}`,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public getPostDetail(id: string): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9003/blog/post-detail/${id}`
        );
    }

    public writePost(post: any): Observable<any> {
        return this.httpClient.post(
            "http://localhost:9003/blog/write-post",
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
