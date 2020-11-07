import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import {FormsModule} from "@angular/forms";
 //services
import { DataApiService } from './services/data-api.service';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
