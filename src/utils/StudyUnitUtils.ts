import { StudyUnitType } from "./StudyUnitType";
import StudyUnit from "./StudyUnit";
import { get, getMany, set, setMany, update } from 'idb-keyval/dist/esm-compat';
import Result from "./Result";

const HAS_ENTERED_KEY = "hasEntered";

const LESSON = "l";
const TEST = "t";

const TEST_POSITIONS = [8, 18, 24, 28, 34, 39, 48, 56];
const LESSON_AMOUNT = 42;

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

export async function getAllStudyUnitsArray(unitIds: string[]) {
    /*let lessonsToGet: any[] = [];
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
        });*/

    try {
        const result = await getMany(unitIds);

        return new Result<StudyUnit[]>(true, result, null);
    } catch (error) {
        return new Result<StudyUnit[]>(false, null, error);
    }
}

export async function changeStudyUnit(unit: StudyUnit) {
    let key = unit.id;

    try {
        const value = get(key);

        if (value === undefined) {
            return new Result(false, null, new Error("Value not found"));
        } else {
            try {
                await update(key, (val) => {
                    val.unlocked = unit.unlocked;
                    val.id = unit.id;
                    return val;
                });
                // Successful update
                return new Result(true, unit, null);;
            } catch (error) {
                return new Result(false, null, error);
            }
        }
    } catch (error) {
        return new Result(false, null, error);
    }
}

export async function generateAndGetStudyUnitsIfNeeded(unitIds: string[]) {

    try {
        const value = await get(HAS_ENTERED_KEY);

        if (value === undefined) {
            const result = await generateAndStoreStudyUnits(unitIds);
            // If the result isn't a success, return early
            if (!result.success) {
                return result;
            }

            try {
                await set(HAS_ENTERED_KEY, {HAS_ENTERED_KEY: true});
                return result;
            } catch (error) {
                return new Result<StudyUnit[]>(false, result.result, error);
            }
        } else {
            return await getAllStudyUnitsArray(unitIds);
        }
    } catch (error) {
        return new Result<StudyUnit[]>(false, await generateStudyUnits(unitIds), error);
    }
}

export async function generateAndStoreStudyUnits(unitIds: string[]) {

    let valuesToStore: any[] = [];
    let result: StudyUnit[] = await generateStudyUnits(unitIds);

    for (let i = 0; i < result.length; i++) {
        valuesToStore.push([result[i].id, result[i]]);
    }
    try {
        await setMany(valuesToStore);

        return new Result<StudyUnit[]>(true, result, null);
    } catch (error: any) {
        console.log(error);
        return new Result<StudyUnit[]>(false, result, error);
    }
}

export async function generateStudyUnits(unitIds: string[]) {
    let result: StudyUnit[] = [];

    for (let i = 0; i < unitIds.length; i++) {
        const id = unitIds[i];
        const studyUnitType = getStudyUnitTypeById(id);
        const studyUnitNumber = getStudyUnitNumberFromId(id);
        const shouldBeUnlocked = i === 0;
        const unit = new StudyUnit(studyUnitType, studyUnitNumber, shouldBeUnlocked, id);
        result.push(unit);
    }

    return result;
}



export function getStudyUnitTypeById(id: string) {
    /* We assume all unit types exist in the StudyUnitType enum and they are all 1 char which is at the first position
    of the id*/
    return id.charAt(0) as StudyUnitType;
}

export function getStudyUnitNumberFromId(id: string) {
    const idWithoutUnitType = id.substring(1);

    return Number(idWithoutUnitType);
}