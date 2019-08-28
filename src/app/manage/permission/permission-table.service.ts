import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PermissionTableService {
    constructor(public httpClient: HttpClient) { }

    public getPermissionTable(dataURL: string,data={}): Observable<any> {
        return this.httpClient.post(dataURL,data);
    }

    public del(delURL:string): Observable<any> {
        return this.httpClient.delete(delURL);
    }

    public toEdit(editURL:string): Observable<any> {
        return this.httpClient.get(editURL);
    }

    public newPermission(newURL:string,data:any): Observable<any> {
        return this.httpClient.post(newURL,data);
    }

    public updatePermission(updateURL:string,permission:any): Observable<any> {
        return this.httpClient.post(updateURL,permission);
    }

    public getPermissionDetails(dataURL: string,permissionId): Observable<any> {
        return this.httpClient.get(dataURL+permissionId);
    }
}
