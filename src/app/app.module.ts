import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { routing,
    appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent, FooterComponent } from './shared';

import { AboutModule } from './about';
import { HomeModule } from './home';
import { LoginModule } from './login';
import { JoinModule } from './join';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot(),
        routing,
        HomeModule,
        AboutModule,
        LoginModule,
        JoinModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
