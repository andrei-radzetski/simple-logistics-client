import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { HeaderModule } from '../shared/header/header.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';


@NgModule({
    imports: [
        loginRouting,
        HeaderModule,
        TranslateModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}