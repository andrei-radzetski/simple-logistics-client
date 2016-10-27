import { NgModule } from '@angular/core';

import { HeaderModule } from '../shared/header/header.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';


@NgModule({
    imports: [
        loginRouting,
        HeaderModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}