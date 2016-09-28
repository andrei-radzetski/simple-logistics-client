import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { HeaderModule } from '../shared/header';

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