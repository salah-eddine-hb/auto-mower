import { Position } from './position.model';
import { OrientationEnum } from './orientation.enum';
import { InstructionEnum } from './instruction.enum';

export class Mower {

    private instructions: InstructionEnum[];

    constructor(private position: Position, private orientation: OrientationEnum) { }

    public get Instructions(): Array<InstructionEnum> {
        return this.instructions;
    }
    public get Position() {
        return this.position;
    }
    public get Orientation() {
        return this.orientation;
    }
    public set Position(value: Position) {
        this.position = value;
    }
    public set Orientation(value: OrientationEnum) {
        this.orientation = value;
    }
    public set Instructions(value: InstructionEnum[]) {
        this.instructions = value;
    }
}