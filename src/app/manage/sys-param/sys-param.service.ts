import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SysParamService {
    private GET_PARAM_URL="/cms/param/all";

    constructor(public httpClient: HttpClient) { }

    public getAllParam(): Observable<any> {
        return this.httpClient.get(this.GET_PARAM_URL);
    }
}
