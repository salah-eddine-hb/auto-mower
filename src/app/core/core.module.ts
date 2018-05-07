import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorService } from './services/validator.service';
import { ExecutorService } from './services/executor.service';
import { LoaderService } from './services/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ValidatorService,
    ExecutorService,
    LoaderService
  ],
})
export class CoreModule { }
