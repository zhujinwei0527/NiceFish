import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RoleMngService {
    constructor(public httpClient: HttpClient) { }

    public getRoleTable(dataURL: string,data={}): Observable<any> {
        return this.httpClient.post(dataURL,data);
    }

    public del(delURL:string): Observable<any> {
        return this.httpClient.delete(delURL);
    }

    public newRole(newURL:string,data:any): Observable<any> {
        return this.httpClient.post(newURL,data);
    }

    public updateRole(updateURL:string,role:any): Observable<any> {
        return this.httpClient.post(updateURL,role);
    }

    public getRoleDetails(dataURL: string,roleId): Observable<any> {
        return this.httpClient.get(dataURL+roleId);
    }

    public getAllPermissionsByRoleId(dataURL: string,roleId): Observable<any> {
        return this.httpClient.get(dataURL+roleId);
    }

    public getAllPermissions(dataURL: string,data): Observable<any> {
        return this.httpClient.post(dataURL,data);
    }

}
