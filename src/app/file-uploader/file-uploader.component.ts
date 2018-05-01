import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';
import { Mower } from '../Mower';

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

  openFile(files: FileList) {
    let reader = new FileReader();

    reader.onload = () => {
        const data = reader.result;
        this.errors = this.validatorService.validate(data);
        if(this.errors.length == 0) 
          this.mowers = this.executorService.loadMowers(data);
    }
    reader.readAsText(files[0]);
    };
  }