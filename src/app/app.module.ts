import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InstructionsExecutorService } from './instructions-executor.service';
import { FileValidatorService } from './file-validator.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { MowerPositionComponent } from './mower-position/mower-position.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    MowerPositionComponent
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
