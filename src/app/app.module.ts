import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecieverComponent } from './reciever/reciever.component';
import { ListviewComponent } from './listview/listview.component';


@NgModule({
  declarations: [
    AppComponent,
    RecieverComponent,
    ListviewComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
