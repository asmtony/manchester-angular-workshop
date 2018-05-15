import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldPopupComponent } from './hello-world-popup/hello-world-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
