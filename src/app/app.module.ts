import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
