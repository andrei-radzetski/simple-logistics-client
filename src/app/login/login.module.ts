import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { HeaderModule } from '../shared/header';

@NgModule({
    imports: [
        loginRouting,
        HeaderModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {

}