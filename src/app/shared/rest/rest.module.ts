import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { RestHttp } from '../rest/rest.http';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    {
      provide: RestHttp,
      useFactory: (backend: XHRBackend, options: RequestOptions, route: Router) => {
        return new RestHttp(backend, options, route);
      },
      deps: [ XHRBackend, RequestOptions, Router ]
    }
  ]
})
export class RestModule { }