import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ValidatorService } from './validator.service';
import { ExecutorService } from './executor.service';
import { Loader } from './loader.service';


@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ValidatorService,
    ExecutorService,
    Loader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
