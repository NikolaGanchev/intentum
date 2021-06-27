import React from "react";
import { StudyUnitType } from "./StudyUnitType";
import i18n from 'i18next';
import StudyUnit from "./StudyUnit";

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
    unlocked: false
}

const LESSON = "L";
const TEST = "T";

const TEST_POSITIONS = [8, 18, 23, 26, 31, 35, 42, 49];
const LESSON_AMOUNT = 42;

const Store = window.require('electron-store');
const store = new Store();



export function getStudyUnit(type: StudyUnitType, number: number): StudyUnit | null {

    let unit: StudyUnit | null;


    switch (type) {
        case StudyUnitType.Lesson: {
            let lessonProgress: any = store.get(LESSON + number, {});

            if (lessonProgress == {}) {
                unit = null;
                break;
            }
            else {
                unit = new StudyUnit(StudyUnitType.Lesson, number, lessonProgress.unlocked, lessonProgress.progress);
            }

            break;
        }
        case StudyUnitType.Test: {
            let testProgress: any = store.get(LESSON + number, {});

            if (testProgress == {}) {
                unit = null;
                break;
            }
            else {
                unit = new StudyUnit(StudyUnitType.Test, number, testProgress.unlocked, null);
            }


            break;
        }
    }

    return unit;
}

export function getAllStudyUnitsArray() {
    let units: any[] = [];

    for (let i = 1; i <= LESSON_AMOUNT; i++) {
        let unit = getStudyUnit(StudyUnitType.Lesson, i);
        if (unit == null) {
            i--;
            continue;
        }
        units.push(unit);
    }

    for (let i = 1; i <= TEST_POSITIONS.length; i++) {
        let unit = getStudyUnit(StudyUnitType.Test, i);
        if (unit == null) {
            i--;
            continue;
        }
        units.splice(TEST_POSITIONS[i - 1], 0, unit);
    }

    console.log(units);

    return units;
}

export function changeStudyUnit(unit: StudyUnit, callback: Function) {
    let key = ((unit.type == StudyUnitType.Lesson) ? LESSON : TEST) + unit.number;

    if (store.has(key)) {
        store.set(key, { unlocked: unit.unlocked, progress: (unit.type === StudyUnitType.Lesson) ? unit.progress : null });
    }
    else {
        callback(false);
        return;
    }
}

export async function generateIfNeeded(callback: Function) {

    if (!store.has(HAS_ENTERED_KEY)) {
        store.set(HAS_ENTERED_KEY, { HAS_ENTERED_KEY: true });
        generateStudyUnits(callback);
    }
    else {
        callback(true);
    }
}

export async function generateStudyUnits(callback: Function) {

    /*var worker = new Worker("./worker.ts");

    worker.postMessage("generate");

    worker.addEventListener("generateReady", () => {
        callback(true);
    })*/

    store.set(LESSON + "1", firstUnitConfig);

    for (let i = 2; i <= LESSON_AMOUNT; i++) {
        store.set(LESSON + i, otherUnitsConfig);
    }

    for (let i = 1; i <= TEST_POSITIONS.length; i++) {
        store.set(TEST + i, testConfig)
    }
    callback(true);
}