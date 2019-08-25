import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
    public postDetailURL = "/mock-data/post-mock.json";
    public postListSearchURL = "/mock-data/postlist-search-mock.json";

    constructor(public httpClient: HttpClient) {
    }

    public getPostList (page = 1): Observable<any> {
        return this.httpClient.get(
            `/blog/post/post-list/${page}`,
            {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                })
            }
        );
    }

    public getPostDetail(id: string): Observable<any> {
        return this.httpClient.get(
            `/blog/post/post-detail/${id}`
        );
    }

    public writePost(post: any): Observable<any> {
        return this.httpClient.post(
            "/blog/post/write-post",
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

    public editPost(post: any): Observable<any> {
        return this.httpClient.post(
            "/blog/post/edit-post",
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
