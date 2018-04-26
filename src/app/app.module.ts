import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstructionsFileUploaderComponent } from './instructions-file-uploader/instructions-file-uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    InstructionsFileUploaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
