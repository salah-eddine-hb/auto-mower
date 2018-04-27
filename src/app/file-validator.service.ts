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
        if(this.checkUpperRightCorner(line) == false) {
          console.log('error at line '+ index)
          //return false;
        }
      }
      else {
          if (index % 2 == 0){
            if(this.checkStartingPositionAndOrientation(line) == false) {
              console.log('error at line '+ index)
              //return false;
            }
              
          }
          else{
             if(this.checkStartingPositionAndOrientation(line) == false) {
               console.log('error at line '+ index)
               //return false;
             }
          }
      } index++;
    }
    return true;
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
