import { Component, OnInit } from '@angular/core';

import { ExecutorService } from '../shared/services/executor.service';
import { Error } from '../shared/enums/error.enum';
import { Mower } from '../shared/models/mower.model';
import { ValidatorService } from '../shared/services/validator.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  private mowers: Mower[];
  private errors: string[];

  constructor(private validatorService: ValidatorService, private executorService: ExecutorService) {
  }

  ngOnInit() {
  }

  openFile(file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file) {
        fileReader.onload = () => {
          const data = fileReader.result;
          this.errors = this.validate(data);
          if (this.hasErrors(this.errors))
            resolve(this.errors);
          else
            this.mowers = this.loadMowers(data);
          resolve(this.mowers);
        }
        fileReader.readAsText(file);
      } else {
        this.errors = [Error.ERROR_FILE];
        resolve(this.errors);
      }
    })
  }

  private validate(data: string): string[] {
    return this.validatorService.validate(data)
  }

  private loadMowers(data: string): Mower[] {
    return this.executorService.loadMowers(data)
  }

  private hasErrors(errors): boolean {
    return this.errors.length > 0 ? true : false
  }

  public get Errors() {
    return this.errors;
  }

  public get Mowers() {
    return this.mowers;
  }

}