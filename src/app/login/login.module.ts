import { NgModule } from '@angular/core';

import { HeaderModule } from '../shared/header/header.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { TranslateModule } from '../shared/translate/translate.module';


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