import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';
import { Mower } from '../Mower';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  mowers: Mower[];
  errors: string[];
  constructor(private validatorService: ValidatorService, 
              private executorService: ExecutorService) 
  { }

  ngOnInit() {
  }

  openFile(file: File) {
    return new Promise((resolve, reject) => {
    let reader = new FileReader();
    if(file){
      this.errors = undefined;
      this.mowers = undefined;
      let onload = reader.onload = () => {
          const data = reader.result;
          this.errors = this.validatorService.validate(data);
          if(this.errors.length == 0) 
            this.mowers = this.executorService.loadMowers(data);
          resolve(this.errors);
      }
      reader.readAsText(file);
    }else{
      this.errors = ['Plz upload one valid file'];
      resolve(this.errors);
    }
  });
  }

  get Errors(){
    return this.errors;
  }

}