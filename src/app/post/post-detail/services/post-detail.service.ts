import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable()
export class PostDetailService {
    constructor(public httpClient: HttpClient) {
    }

    public getPostDetail(id: string): Observable<any> {
        return this.httpClient.get(
            `http://localhost:9003/blog/post-detail/${id}`
        );
    }
}