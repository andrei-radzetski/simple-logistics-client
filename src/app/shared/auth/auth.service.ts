import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataService } from '../rest/rest.dataService'
import { AuthRequest } from './auth.request';
import { Auth } from './auth';
import { RestResponse } from '../rest/rest.response';

@Injectable()
export class AuthService extends RestDataService<Auth> {

    constructor(http: Http) {
        super(http);
    }

    getCreator(): { new (): Auth; } {
        return Auth;
    }

    login(model: AuthRequest): Observable<RestResponse<Auth>> {
        return this.postForm('/login', model);
    }

    logout(): Observable<RestResponse<Auth>> {
        return this.getProtected('/logout');
    }

    static setCredential(token: string, expires: number) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('token_expires', expires.toString());
    }

    static destroyCredential() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_expires');
    }

    static getCurrentAccessToken(): string {
        return localStorage.getItem('access_token');
    }

    static isAuthorized(): boolean {
        return !!AuthService.getCurrentAccessToken();
    }

}