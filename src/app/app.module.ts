import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ValidatorService } from './core/services/validator.service';
import { ExecutorService } from './core/services/executor.service';
import { LoaderService } from './core/services/loader.service';


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
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
