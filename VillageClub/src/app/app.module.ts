import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginUserComponent } from './login-user/login-user.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HomeComponent } from './home/home.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HeaderUserComponent,
    HomeComponent,
    ForgetPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
