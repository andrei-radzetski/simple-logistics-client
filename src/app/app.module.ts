import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { JoinModule } from './join/join.module';
import { RequestsModule } from './requests/requests.module';
import { UsersModule } from './users/users.module';
import { ApplyModule } from './apply/apply.module';
import { ProfileModule } from './profile/profile.module';
import { TranslateModule } from './shared/translate/translate.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RequestModule } from './request/request.module';
import { UserPageModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    LoginModule,
    JoinModule,
    RequestsModule,
    UsersModule,
    ProfileModule,
    ApplyModule,
    NgbModule.forRoot(),
    routing,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUlTKaJgsuwTyFfUk-Kg8F2jBiUaFe8so'
    }),
    RequestModule,
    UserPageModule
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
export class AppModule { }
