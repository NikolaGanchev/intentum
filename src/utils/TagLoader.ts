import StudyUnit from "./StudyUnit";
export default class Tags {
    private tags: Map<string, string[]>;

    constructor() {
        this.tags = new Map<string, string[]>();
    }

    addTagsWithStudyUnitId(tags: TagSet) {
        this.tags.set(tags.studyUnit.id, tags.tags);
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

    load(tags: TagSet[]) {
        for (let tag of tags) {
            this.addTagsWithStudyUnitId(tag);
        }
    }
}

export class TagSet {
    studyUnit: StudyUnit;
    tags: string[];

    constructor(studyUnit: StudyUnit, tags: string[]) {
        this.studyUnit = studyUnit;
        this.tags = tags;
    }
}