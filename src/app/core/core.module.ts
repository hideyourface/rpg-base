import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [BrowserModule]
})
export class CoreModule { }
