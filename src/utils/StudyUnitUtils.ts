import { StudyUnitType } from "./StudyUnitType";
import StudyUnit from "./StudyUnit";
import { get, getMany, set, setMany, update } from 'idb-keyval/dist/esm-compat';
import Result from "./Result";
import StorageKeys from "./StorageKeys";

export async function getAllStudyUnitsArray(unitIds: string[]) {
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
        const value = await get(StorageKeys.HAS_ENTERED);

        if (value === undefined) {
            const result = await generateAndStoreStudyUnits(unitIds);
            // If the result isn't a success, return early
            if (!result.success) {
                return result;
            }

            try {
                await set(StorageKeys.HAS_ENTERED, {HAS_ENTERED_KEY: true});
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