import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularDraggableModule } from 'angular2-draggable';


import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/index';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
