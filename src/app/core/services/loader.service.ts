import { Injectable } from '@angular/core';

import { Instruction } from '../enums/instruction.enum';
import { Mower } from '../models/mower.model';
import { Orientation } from '../enums/orientation.enum';
import { Position } from '../models/position.model';

@Injectable()
export class LoaderService {

    constructor() { }

    /**
    * Load mowers from the file
    * @param data - A string represent the file
    * @returns An array of mower
    */
    public loadMowers(data: string): Array<Mower> {
        const lines = data.toString().split('\n');
        const mowers: Array<Mower> = [];
        let corner: Position;
        let mower: Mower;
        let index = 1;
        for (let line of lines) {
            if (index == 1) corner = this.getCorners(line);
            else {
                if (index % 2 == 0) mower = this.getMower(line,corner);
                else {
                    mower.Instructions = this.getCommands(line);
                    mowers.push(mower);
                }
            } index++;
        } return mowers;
    }

    /**
    * Get upper right corner of the lawn and the bottom left
    * @param data - String that contain corners as "XY" form
    * @returns A Position object representing the corners.
    */
    private getCorners(data: string): Position {
        let corner: Position = new Position(parseInt(data.charAt(0)), parseInt(data.charAt(1)));
        return corner;
    }

    /**
    * Get the starting position and orientation as "XYO" without space
    * @param data - String that contain mower position and orientation as "XYO" form 
    * @returns New Mower object
    */
    private getMower(data: string, corner: Position): Mower {
        let mower: Mower;
        let position: Position;
        let orientation: Orientation;

        if((parseInt(data.charAt(0))>0 && parseInt(data.charAt(0))<=corner.X)
            && (parseInt(data.charAt(1))>0 && parseInt(data.charAt(1))<=corner.Y)){
                position = new Position(parseInt(data.charAt(0)), parseInt(data.charAt(1)));
        }else{
            throw new Error("Error parsing mower position data from file");
        }

        switch (data.charAt(2)) {
            case 'N':
                orientation = Orientation.NORD;
                break;
            case 'S':
                orientation = Orientation.SUD;
                break;
            case 'E':
                orientation = Orientation.EST;
                break;
            case 'W':
                orientation = Orientation.WEST;
                break;
            default:
                throw new Error("Error parsing mower orientation data from file");
        }
        mower = new Mower(position, orientation);
        return mower;
    }

    /**
    * Get Instructions to the mower to go throughout the lawn.
    * @param data - String that contain all instructions without space (GADDAAGD)
    * @returns New Instruction object
    */
    private getCommands(data: string): Array<Instruction> {
        let instructions: Array<Instruction> = [];
        for (let index = 0; index < data.length; index++) {
            const instruction = data[index];
            switch (instruction) {
                case 'G':
                    instructions.push(Instruction.LEFT);
                    break;
                case 'D':
                    instructions.push(Instruction.RIGHT);
                    break;
                case 'A':
                    instructions.push(Instruction.FORWARD);
                    break;
                default:
                    throw new Error("Error parsing mower instructions data from file");
            }
        } return instructions;
    }


    /**
    * Load mowers from the file
    * and run the Executor to execute instructions
    */
    public getCorner(data: string): Position {
        const lines = data.toString().split('\n');
        for (let line of lines) {
            return this.getCorners(line);
        }
    }

}
