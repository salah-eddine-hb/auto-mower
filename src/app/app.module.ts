import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { MowerPositionComponent } from './mower-position/mower-position.component';
import { ValidatorService } from './validator.service';
import { ExecutorService } from './executor.service';
import { LoaderService } from './loader.service';


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
    ValidatorService,
    ExecutorService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
