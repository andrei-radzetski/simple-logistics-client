import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import { AuthModel } from './authModel';

@Injectable()
export class AuthService { 

    constructor(
        private http: Http) {
    }

    login(model: AuthModel): Observable<Response> {
        return this
                .http
                .post('http://localhost:3002/auth/login', model);
    }

}