import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {SigninComponent} from './signin/signin.component';
import {LoginComponent} from './login/login.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,SigninComponent,LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
