import { StudyUnitType } from "./StudyUnitType";

export default class StudyUnit {
    type: StudyUnitType;
    number: number;
    unlocked: boolean;
    progress: string | null;

    constructor(type: StudyUnitType, number: number, unlocked: boolean, progress: string | null) {
        this.type = type;
        this.number = number;
        this.unlocked = unlocked;
        this.progress = progress;
    }
}