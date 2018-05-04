import { Mower } from './mower.model';
import { Injectable } from '@angular/core';
import { InstructionEnum } from './instruction.enum';
import { OrientationEnum } from './orientation.enum';
import { LoaderService } from './loader.service';
import { Position } from './position.model';

@Injectable()
export class ExecutorService {

  constructor(private loaderService: LoaderService) { }

  /**
  * Move the mower to the Right, Left or Forward
  * @param (Mower, Instruction, Corner)
  * @returns Mower
  */
  public loadMowers(data: string): Mower[] {
       const corner = this.loaderService.getCorner(data);
       const mowers = this.loaderService.loadMowers(data);
       return this.execute(mowers,corner);
  }

  /**
  * Execute the instructions and move the mowers
  * @param (Mowers, Corner)
  */
  private execute(mowers: Array<Mower>, corner: Position): Mower[] {
    let instructions: Array<InstructionEnum>;
    let instruction: InstructionEnum;
    const results: Mower[] = [];
    let mower: Mower;
    for (let i = 0; i < mowers.length; i++) {
        mower = mowers[i];
        instructions = mower.Instructions;
        for (let j = 0; j < instructions.length; j++) {
            instruction = instructions[j];
            mower = this.move(mower, instruction, corner);
        }
      results.push(new Mower(new Position(mower.Position.X,mower.Position.Y),mower.Orientation));
    }return results;
  }

  /**
  * Move the mower to the Right, Left or Forward
  * @param (Mower, Instruction, Corner)
  * @returns Mower
  */
  private move(mower: Mower, instruction: InstructionEnum, corner: Position): Mower {
      if (instruction === InstructionEnum.RIGHT) {
          this.moveRight(mower);
      } else if (instruction === InstructionEnum.LEFT) {
          this.moveLeft(mower);
      } else if (instruction === InstructionEnum.FORWARD) {
          this.moveForward(mower, corner);
      } else {
          //error
      } return mower;
  }

  /**
  * Move the mower to the LEFT
  * @param Mower
  * @returns Mower
  */
  private moveLeft(mower: Mower): Mower {
      if (mower.Orientation === OrientationEnum.NORD) {
          mower.Orientation = OrientationEnum.WEST;
      } else if (mower.Orientation === OrientationEnum.SUD) {
          mower.Orientation = OrientationEnum.EST;
      } else if (mower.Orientation === OrientationEnum.WEST) {
          mower.Orientation = OrientationEnum.SUD;
      } else if (mower.Orientation === OrientationEnum.EST) {
          mower.Orientation = OrientationEnum.NORD;
      } else {
          //error
      } return mower;
  }

  /**
  * Move the mower to the RIGHT
  * @param Mower
  * @returns Mower
  */
  private moveRight(mower: Mower): Mower {
      if (mower.Orientation === OrientationEnum.NORD) {
          mower.Orientation = OrientationEnum.EST;
      } else if (mower.Orientation === OrientationEnum.SUD) {
          mower.Orientation = OrientationEnum.WEST;
      } else if (mower.Orientation === OrientationEnum.WEST) {
          mower.Orientation = OrientationEnum.NORD;
      } else if (mower.Orientation === OrientationEnum.EST) {
          mower.Orientation = OrientationEnum.SUD;
      } else {
          //error
      } return mower;
  }

  /**
  * Move the mower FORWARD
  * @param (Mower , Corner)
  * @returns Mower
  */
  private moveForward(mower: Mower, corner: Position): Mower {
      if (mower.Orientation === OrientationEnum.NORD) {
          if (this.checkMovingYForward(mower, corner))
              mower.Position.Y = mower.Position.Y + 1;
      } else if (mower.Orientation === OrientationEnum.SUD) {
          if (this.checkMovingYBackward(mower))
              mower.Position.Y = mower.Position.Y - 1;
      } else if (mower.Orientation === OrientationEnum.WEST) {
          if (this.checkMovingXBackward(mower))
              mower.Position.X = mower.Position.X - 1;
      } else if (mower.Orientation === OrientationEnum.EST) {
          if (this.checkMovingXForward(mower, corner))
              mower.Position.X = mower.Position.X + 1;
      } else {
          //error
      } return mower;
  }

  /**
  * Check if the mower does not exceed the limits when moving X Forward
  * @param (Mower , Corner)
  * @returns True if it's OK to move X Farward
  */
  private checkMovingXForward(mower: Mower, corner: Position): boolean {
      if ((mower.Position.X + 1) > corner.X) return false;
      else return true;
  }

  /**
  * Check if the mower does not exceed the limits when moving X Backward
  * @param (Mower , Corner)
  * @returns True if it's OK to move X Backward
  */
  private checkMovingXBackward(mower: Mower): boolean {
      if (mower.Position.X - 1 < 0) return false;
      else return true;
  }

  /**
  * Check if the mower does not exceed the limits when moving Y Forward
  * @param (Mower , Corner)
  * @returns True if it's OK to move Y Forward
  */
  private checkMovingYForward(mower: Mower, corner: Position): boolean {
      if ((mower.Position.Y + 1) > corner.Y) return false;
      else return true;
  }

  /**
  * Check if the mower does not exceed the limits when moving Y Backward
  * @param (Mower , Corner)
  * @returns True if it's OK to move Y Backward
  */
  private checkMovingYBackward(mower: Mower): boolean {
      if (mower.Position.Y - 1 < 0) return false;
      else return true;
  }

  /**
  * Check collision with other mowers
  * @param Mower
  * @returns True if no collision detected
  **/
  private checkCollision(mower: Mower): boolean {
      return true;
  }

}
