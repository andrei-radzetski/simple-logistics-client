import { Component } from '@angular/core';
import { AuthModel, AuthService } from '../shared/auth';
import { Response } from '@angular/http';


@Component({
    moduleId: 'app/login/',
    selector: 'sl-login',
    templateUrl: './login.component.html',
    providers: [
        AuthService
    ]
})
export class LoginComponent {

    model = new AuthModel('', '');
    submitted = false;

    constructor(
        private auth: AuthService) {

    }

    onSubmit() { 
        this.auth
            .login(this.model)
            .subscribe((res: Response) => {
                console.log(res);
            }, (err: Response) => {
                console.log(err);
            });
    }
}