import { StudyUnitType } from "./StudyUnitType";
import StudyUnit from "./StudyUnit";
import { get, getMany, set, setMany, update } from 'idb-keyval';

const HAS_ENTERED_KEY = "hasEntered";

const firstUnitConfig = {
    unlocked: true,
    progress: null
}

const otherUnitsConfig = {
    unlocked: false,
    progress: null
}

const testConfig = {
    unlocked: false,
    progress: null
}

const LESSON = "L";
const TEST = "T";

const TEST_POSITIONS = [8, 18, 23, 26, 31, 35, 42, 49];
const LESSON_AMOUNT = 42;



export async function getStudyUnit(type: StudyUnitType, number: number, callback: Function) {

    let unit: StudyUnit | null;


    switch (type) {
        case StudyUnitType.Lesson: {
            console.log(LESSON + number);
            let lessonProgress: any = await get(LESSON + number);
            unit = new StudyUnit(StudyUnitType.Lesson, number, lessonProgress.unlocked, lessonProgress.progress);
            break;
        }
        case StudyUnitType.Test: {
            let testProgress: any = await get(TEST + number);
            unit = new StudyUnit(StudyUnitType.Test, number, testProgress.unlocked, null);


            break;
        }
    }

    callback(unit);
}

export async function getAllStudyUnitsArray(callback: Function) {
    let lessonsToGet: any[] = [];
    let studyUnits: StudyUnit[] = [];

    lessonsToGet.push(LESSON + "1");

    for (let i = 2; i <= LESSON_AMOUNT; i++) {
        lessonsToGet.push(LESSON + i);
    }

    getMany(lessonsToGet)
        .then((...args) => {
            for (let i = 1; i <= args[0].length; i++) {
                let currentLesson = args[0][i - 1];
                studyUnits.push(new StudyUnit(StudyUnitType.Lesson, i, currentLesson.unlocked, currentLesson.progress))
            }

            let testsToGet: any[] = [];

            for (let i = 1; i <= TEST_POSITIONS.length; i++) {
                testsToGet.push(TEST + i);
            }

            getMany(testsToGet)
                .then((...args1) => {
                    let tests = [];
                    for (let i = 1; i <= args1[0].length; i++) {
                        let currentTest = args1[0][i - 1];
                        tests.push(new StudyUnit(StudyUnitType.Test, i, currentTest.unlocked, currentTest.progress));
                    }

                    for (let i = 0; i < TEST_POSITIONS.length; i++) {
                        studyUnits.splice(TEST_POSITIONS[i], 0, tests[i]);
                    }

                    callback(studyUnits);
                })
                .catch((err) => {
                    callback(null);
                    throw err;
                });
        })
        .catch((err) => {
            callback(null);
            throw err;
        });


}

export async function changeStudyUnit(unit: StudyUnit, callback: Function) {
    let key = ((unit.type === StudyUnitType.Lesson) ? LESSON : TEST) + unit.number;

    get(key).then((value) => {
        if (value === undefined) {
            callback(false);
            return;
        }
        else {
            update(key, (val) => {
                val.unlocked = unit.unlocked;
                val.progress = (unit.type === StudyUnitType.Lesson) ? unit.progress : null;
                return val;
            }).then(() => {
                callback(true);
            }).catch((err) => {
                console.log(err);
                callback(false);
            });
        }
    });
}

export async function generateStudyUnitsIfNeeded(callback: Function) {

    get(HAS_ENTERED_KEY).then((value) => {
        if (value === undefined) {
            set(HAS_ENTERED_KEY, { HAS_ENTERED_KEY: true }).then(() => {
                generateStudyUnits(callback);
            }).catch((err) => {
                console.log(err);
                callback(false);
            });

        }
        else {
            callback(true);
        }
    }).catch((err) => {
        console.log(err);
        callback(false);
    });
}

export async function generateStudyUnits(callback: Function) {

    let valuesToStore: any[] = [];

    valuesToStore.push([LESSON + "1", firstUnitConfig]);

    for (let i = 2; i <= LESSON_AMOUNT; i++) {
        valuesToStore.push([LESSON + i, otherUnitsConfig]);
    }

    for (let i = 1; i <= TEST_POSITIONS.length; i++) {
        valuesToStore.push([TEST + i, testConfig]);
    }

    setMany(valuesToStore)
        .then(() => {
            callback(true);
        })
        .catch((err) => {
            console.log("fail " + JSON.stringify(err));
            callback(false);
        });
}