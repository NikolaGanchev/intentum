import { StudyUnitType } from "./StudyUnitType";

export default class StudyUnit {
    type: StudyUnitType;
    number: number;
    unlocked: boolean;
    /* The id consists of a single letter, corresponding to a unit type and a number, showing the number of the unit */
    id: string;

    constructor(type: StudyUnitType, number: number, unlocked: boolean, id: string) {
        this.type = type;
        this.number = number;
        this.unlocked = unlocked;
        this.id = id;
    }
}