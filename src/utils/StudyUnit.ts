import { StudyUnitType } from "./StudyUnitType";

export default class StudyUnit {
    type: StudyUnitType;
    number: number;
    unlocked: boolean;
    id: string;

    constructor(type: StudyUnitType, number: number, unlocked: boolean, id: string) {
        this.type = type;
        this.number = number;
        this.unlocked = unlocked;
        this.id = id;
    }
}