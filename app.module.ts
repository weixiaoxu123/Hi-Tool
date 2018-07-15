import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { HeroComponent }   from './hero/hero.component';
import { UrlComponent } from './url/url.component';
import { HttpClientModule } from '@angular/common/http';
import { AlarmComponent } from './alarm/alarm.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
<<<<<<< HEAD
import { httpInterceptorProviders } from './http-interceptors/index';
=======

>>>>>>> 0193528e3ee41973547c63261b8b1393fbe216b8

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FileUploadModule

],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroComponent,
    UrlComponent,
    AlarmComponent,
<<<<<<< HEAD
  ],
  providers: [
    httpInterceptorProviders
=======
>>>>>>> 0193528e3ee41973547c63261b8b1393fbe216b8
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
