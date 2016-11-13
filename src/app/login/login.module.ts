import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from '../shared/header/header.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { TranslateModule } from '../shared/translate/translate.module';


@NgModule({
    imports: [
        loginRouting,
        HeaderModule,
        TranslateModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {}