import { StudyUnitType } from "./StudyUnitType";
import StudyUnit from "./StudyUnit";
import { get, getMany, set, setMany, update } from 'idb-keyval/dist/esm-compat';

const HAS_ENTERED_KEY = "hasEntered";

const LESSON = "l";
const TEST = "t";

const TEST_POSITIONS = [8, 18, 23, 26, 31, 35, 42, 49];
const LESSON_AMOUNT = 43;



export async function getStudyUnit(type: StudyUnitType, number: number, callback: Function) {

    let unit: StudyUnit | null;


    switch (type) {
        case StudyUnitType.Lesson: {
            let lessonProgress: StudyUnit | undefined = await get(LESSON + number);
            if (lessonProgress === undefined) {
                unit = null;
                break;
            }
            unit = lessonProgress;
            break;
        }
        case StudyUnitType.Test: {
            let testProgress: StudyUnit | undefined = await get(TEST + number);
            if (testProgress === undefined) {
                unit = null;
                break;
            }
            unit = testProgress;

            break;
        }
    }

    callback(unit);
}

export async function getAllStudyUnitsArray(callback: Function) {
    let lessonsToGet: any[] = [];
    let studyUnits: StudyUnit[] = [];

    lessonsToGet.push(LESSON + "0");

    for (let i = 1; i <= LESSON_AMOUNT; i++) {
        lessonsToGet.push(LESSON + i);
    }

    getMany(lessonsToGet)
        .then((...args) => {
            for (let i = 1; i <= args[0].length; i++) {
                let currentLesson: StudyUnit = args[0][i - 1];
                studyUnits.push(currentLesson)
            }

            let testsToGet: any[] = [];

            for (let i = 1; i <= TEST_POSITIONS.length; i++) {
                testsToGet.push(TEST + i);
            }

            getMany(testsToGet)
                .then((...args1) => {
                    let tests = [];
                    for (let i = 1; i <= args1[0].length; i++) {
                        let currentTest: StudyUnit = args1[0][i - 1];
                        tests.push(currentTest);
                    }

                    for (let i = 0; i < TEST_POSITIONS.length; i++) {
                        studyUnits.splice(TEST_POSITIONS[i] - i, 0, tests[i]);
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
    let key = unit.id;

    get(key).then((value) => {
        if (value === undefined) {
            callback(false);
            return;
        }
        else {
            update(key, (val) => {
                val.unlocked = unit.unlocked;
                val.id = unit.id;
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
                callback(false);
            });

        }
        else {
            callback(true);
        }
    }).catch((err) => {
        callback(false);
    });
}

export async function generateStudyUnits(callback: Function) {

    let valuesToStore: any[] = [];

    valuesToStore.push([LESSON + "0", new StudyUnit(StudyUnitType.Lesson, 0, true, LESSON + "0")]);

    for (let i = 1; i <= LESSON_AMOUNT; i++) {
        valuesToStore.push([LESSON + i, new StudyUnit(StudyUnitType.Lesson, i, false, LESSON + i)]);
    }

    for (let i = 1; i <= TEST_POSITIONS.length; i++) {
        valuesToStore.push([TEST + i, new StudyUnit(StudyUnitType.Test, i, false, TEST + i)]);
    }

    setMany(valuesToStore)
        .then(() => {
            callback(true);
        })
        .catch((err) => {
            callback(false);
        });
}