import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstructionsExecutorService } from './instructions-executor.service';
import { FileValidatorService } from './file-validator.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FileValidatorService,
    InstructionsExecutorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
