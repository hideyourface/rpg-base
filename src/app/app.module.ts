import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, 
    CoreModule, 
    BrowserModule,
    BrowserAnimationsModule],
  providers: [
    {provide : LOCALE_ID, useValue : 'it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
