import { TFunction } from "i18next";
import StudyUnit from "./StudyUnit";
class Tags {
    private tags: Map<string, string[]>;

    constructor() {
        this.tags = new Map<string, string[]>();
    }

    addTagsWithStudyUnit(unit: StudyUnit, tags: string[]) {
        this.tags.set(unit.id, tags);
    }

    addTagsWithStudyUnitId(unit: string, tags: string[]) {
        this.tags.set(unit, tags);
    }

    getTags(id: string) {
        return this.tags.get(id);
    }

    async search(stringToSearch: string, maxResults: number = Number.MAX_VALUE) {
        // Check for empty search string
        if (stringToSearch.trim() === "") {
            return [];
        }

        const normalised: string[] = stringToSearch.toLowerCase().trim().split(" ");
        const results: string[] = [];

        this.tags.forEach((value: string[], key: string) => {
            if (results.length + 1 >= maxResults) {
                return;
            }

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
            TagLoader.tags.addTagsWithStudyUnitId(unit.id, translator(`tags.${unit.id}`, { returnObjects: true }));
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