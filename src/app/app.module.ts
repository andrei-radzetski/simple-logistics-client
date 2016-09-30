import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { JoinModule } from './join/join.module';
import { SearchModule } from './search/search.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot(),
        routing,
        HomeModule,
        AboutModule,
        LoginModule,
        JoinModule,
        SearchModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
