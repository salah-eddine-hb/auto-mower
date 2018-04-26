import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstructionsFileUploaderComponent } from './instructions-file-uploader/instructions-file-uploader.component';
import { InstructionsExecutorService } from './instructions-executor.service';
import { FileValidatorService } from './file-validator.service';


@NgModule({
  declarations: [
    AppComponent,
    InstructionsFileUploaderComponent
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
