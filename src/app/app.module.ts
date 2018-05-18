import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IframeModule } from './components/iframe/iframe.module';



import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/index';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    IframeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
