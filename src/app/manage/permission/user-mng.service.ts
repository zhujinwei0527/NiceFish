import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserMngService {
    constructor(public httpClient: HttpClient) { }

    public getUserTable(dataURL: string,data={}): Observable<any> {
        return this.httpClient.post(dataURL,data);
    }

    public del(delURL:string): Observable<any> {
        return this.httpClient.delete(delURL);
    }

    public toEdit(editURL:string): Observable<any> {
        return this.httpClient.get(editURL);
    }
}
