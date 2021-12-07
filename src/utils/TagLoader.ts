export default class Tags {
    private tags: Map<string, string[]>;

    constructor() {
        this.tags = new Map<string, string[]>();
    }

    addTagSet(tagSet: TagSet) {
        const normalisedTags = tagSet.tags.map((value: string) => {
            return this.normalise(value);
        });
        this.tags.set(tagSet.id, normalisedTags);
    }

    getTags(id: string) {
        return this.tags.get(id);
    }

    async search(stringToSearch: string, maxResults: number = Number.MAX_VALUE) {
        // Check for empty search string
        if (stringToSearch.trim() === "") {
            return [];
        }

        const normalised: string = this.normalise(stringToSearch);
        const results: string[] = [];

        this.tags.forEach((value: string[], key: string) => {
            if (results.length + 1 >= maxResults) {
                return;
            }
            for (let val of value) {
                if (val.indexOf(normalised) !== -1) {
                    results.push(key);
                    return;
                }
            }
        });

        return results;
    }

    load(tagSets: TagSet[]) {
        for (let tagSet of tagSets) {
            this.addTagSet(tagSet);
        }
    }

    clear() {
        this.tags.clear();
    }

    private normalise(stringToNormalise: string) {
        return stringToNormalise.toLowerCase().trim();
    }
}

export class TagSet {
    id: string;
    tags: string[];

    constructor(id: string, tags: string[]) {
        this.id = id;
        this.tags = tags;
    }
}