import { Component, OnInit } from '@angular/core';
import { FileValidatorService } from '../file-validator.service';
import { InstructionsExecutorService } from '../instructions-executor.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private fileValidator: FileValidatorService, 
              private instructionsExecutor: InstructionsExecutorService) 
  { }

  ngOnInit() {
  }

  openFile(event) {
    let input = event.target;
    let reader = new FileReader();
    reader.onload = () => {
        let text = reader.result;
        if(this.fileValidator.validate(text))
          this.instructionsExecutor.execute(); 
        else
          this.instructionsExecutor.execute();
    }
    reader.readAsText(input.files[0]);
  };

}
