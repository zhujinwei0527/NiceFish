import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PostlistService {
  public postListURL = 'mock-data/postlist-mock.json';

  constructor(public httpClient: HttpClient) { }

  public getPostList(page: number = 1): Observable<any> {
    return this.httpClient.get(
      `http://localhost:9003/blog/post/${page}`,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }
}
