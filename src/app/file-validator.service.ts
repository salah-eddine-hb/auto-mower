import { Injectable } from '@angular/core';

@Injectable()
export class FileValidatorService {

  constructor() { }

  //check empty file, file with errors, ...
  public validate(content: string): string[]{
    const lines = content.toString().split('\n');
    let errors: string[] =  [];
    let index = 1;
    for (let line of lines) {
      if (index == 1) {
        if(this.checkUpperRightCorner(line) == false)
          errors.push('error at line '+ index)
      }
      else {
          if (index % 2 == 0){
            if(this.checkStartingPositionAndOrientation(line) == false)
              errors.push('error at line '+ index)
          }
          else{
             if(this.checkInstructions(line) == false)
              errors.push('error at line '+ index)
          }
      } index++;
    }
    return errors;
  }

  private checkUpperRightCorner(data: string): boolean{
    let regex = /^[0-9]{2}$/g
    let result = regex.test(data);
    return result;
  }

  private checkStartingPositionAndOrientation(data: string): boolean{
    let regex = /^[0-9]{2}[NEWS]{1}$/g
    let result = regex.test(data);
    return result;
  }

  private checkInstructions(data: string): boolean{
    let regex = /^[ADG]+$/g
    let result = regex.test(data);
    return result;
  }

}
