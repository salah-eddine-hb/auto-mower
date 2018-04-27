import { Component, OnInit } from '@angular/core';
import { FileValidatorService } from '../file-validator.service';
import { ExecutorService } from '../executor.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private fileValidator: FileValidatorService, 
              private executorService: ExecutorService) 
  { }

  ngOnInit() {
  }

  openFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
        let data = reader.result;
        let errors = this.fileValidator.validate(data);
        if(errors.length == 0) this.executorService.loadMowers(data);
        else errors.forEach(element => { console.log(element);})
    }
    reader.readAsText(input.files[0]);
  };

}