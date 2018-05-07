import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MowerUploaderComponent } from './mower-uploader/mower-uploader.component';
//import { ValidatorService } from './core/services/validator.service';
//import { ExecutorService } from './core/services/executor.service';
//import { LoaderService } from './core/services/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    MowerUploaderComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
