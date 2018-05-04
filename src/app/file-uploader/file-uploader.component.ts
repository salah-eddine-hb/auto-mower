import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';
import { Mower } from '../mower.model';
import { Error } from '../error.enum';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  mowers: Mower[];
  errors: string[];

  constructor(private validatorService: ValidatorService, private executorService: ExecutorService) {
  }

  ngOnInit() {
  }

  openFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if(file){
        reader.onload = () => {
            const data = reader.result;
            this.errors = this.validate(data);
            if(this.hasErrors(this.errors)) 
              resolve(this.errors);
            else  
              this.mowers = this.loadMowers(data);
        }
        reader.readAsText(file);
      }else{
        this.errors = [Error.ERROR_FILE];
        resolve(this.errors);
      }
    })
  }

  validate(data: string): string[]{
    return this.validatorService.validate(data)
  }

  loadMowers(data: string): Mower[]{
    return this.executorService.loadMowers(data)
  }

  hasErrors(errors): boolean{
    return this.errors.length > 0 ? true : false
  }

  get Errors(){
    return this.errors;
  }

}