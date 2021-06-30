import StudyUnit from "./StudyUnit";

export default class StudyUnitWithTranslations extends StudyUnit {
    title: string;
    text: string;

    constructor(studyUnit: StudyUnit, title: string, text: string) {
        super(studyUnit.type, studyUnit.number, studyUnit.unlocked, studyUnit.progress);
        this.title = title;
        this.text = text;
    }
}