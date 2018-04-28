import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  results: string[];
  constructor(private validatorService: ValidatorService, 
              private executorService: ExecutorService) 
  { }

  ngOnInit() {
  }

  openFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
        let data = reader.result;
        let errors = this.validatorService.validate(data);
        if(errors.length == 0) this.results = this.executorService.loadMowers(data);
        else this.results = errors;
    }
    reader.readAsText(input.files[0]);
  };

}