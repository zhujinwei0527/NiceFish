import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CommentTableService {
    constructor(public httpClient: HttpClient) { }

    public getCommentTable(dataURL: string): Observable<any> {
        return this.httpClient.get(dataURL);
    }

    public delComment(delURL:string): Observable<any> {
        return this.httpClient.delete(delURL);
    }
}
