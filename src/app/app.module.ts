import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageCropModule } from '../lib/image-crop/image-crop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageCropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
