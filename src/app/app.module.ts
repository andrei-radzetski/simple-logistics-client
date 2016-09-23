import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing,
    appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent, FooterComponent } from './shared';

import { AboutModule } from './about';
import { HomeModule } from './home';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        HomeModule,
        AboutModule
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
