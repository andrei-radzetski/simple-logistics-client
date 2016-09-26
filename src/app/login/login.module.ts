import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';

@NgModule({
    imports: [
        loginRouting
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {

}