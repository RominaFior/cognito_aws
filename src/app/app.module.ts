
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Interactions from '@aws-amplify/interactions';
import Storage from '@aws-amplify/storage';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    AmplifyAngularModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [
    {
      provide: AmplifyService,
      useFactory: () => {
        return AmplifyModules({
          Auth,
          Storage,
          Interactions
        });
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
