import { TFunction } from "i18next";
import StudyUnit from "./StudyUnit";
import { getIdFromStudyUnit, getStudyUnit } from "./StudyUnitUtils";

class Tags {
    private tags: Map<string, string[]>;

    constructor() {
        this.tags = new Map<string, string[]>();
    }

    addTagsWithStudyUnit(unit: StudyUnit, tags: string[]) {
        this.tags.set(getIdFromStudyUnit(unit), tags);
    }

    addTagsWithStudyUnitId(unit: string, tags: string[]) {
        this.tags.set(unit, tags);
    }

    getTags(id: string) {
        return this.tags.get(id);
    }

    async search(stringToSearch: string) {
        const normalised: string[] = stringToSearch.toLowerCase().trim().split(" ");
        const results: string[] = [];

        this.tags.forEach((value: string[], key: string) => {
            for (let token of normalised) {
                for (let val of value) {
                    if (val.indexOf(token) !== -1) {
                        results.push(key);
                        return;
                    }
                }
            }
        });

        return results;
    }
}

export default class TagLoader {
    private static tags: Tags;

    static load(translator: TFunction, units: StudyUnit[]) {
        TagLoader.tags = new Tags();

        for (let unit of units) {
            const id = getIdFromStudyUnit(unit);
            TagLoader.tags.addTagsWithStudyUnitId(id, translator(`tags.${id}`, { returnObjects: true }));
        }
    }

    static getTagsObject() {
        if (TagLoader.tags) {
            return TagLoader.tags;
        }
        else {
            throw new Error("Call TagLoader.load() to load tags before using TagLoader.getTags()");
        }
    }
}