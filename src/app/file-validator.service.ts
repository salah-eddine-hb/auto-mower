import { Injectable } from '@angular/core';

@Injectable()
export class FileValidatorService {

  constructor() { }

  //check empty file, file with errors, ...
  public validate(content: string): boolean{
    const lines = content.toString().split('\n');
    let index = 1;
    for (let line of lines) {
      if (index == 1) {
        if(!this.checkUpperRightCorner(line)) 
          return false;
      }
      else {
          if (index % 2 == 0){
            if(!this.checkStartingPositionAndOrientation(line)) 
              return false;
          }
          else{
             if(!this.checkStartingPositionAndOrientation(line)) 
              return false;
          }
      } index++;
    }
    return true;
  }

  private checkUpperRightCorner(data: string): boolean{
    let regex = /^[0-9]\d{2}$/g
    return regex.test(data);
  }

  private checkStartingPositionAndOrientation(data: string): boolean{
    let regex = /^[0-9]\d{2}[NEWS]{1}$/g
    return regex.test(data);
  }

  private checkInstructions(data: string): boolean{
    let regex = /^[ADG]+$/g
    return regex.test(data);
  }

}
