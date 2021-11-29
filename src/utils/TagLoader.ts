export default class Tags {
    private tags: Map<string, string[]>;

    constructor() {
        this.tags = new Map<string, string[]>();
    }

    addTagSet(tagSet: TagSet) {
        this.tags.set(tagSet.id, tagSet.tags);
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

    load(tagSets: TagSet[]) {
        for (let tagSet of tagSets) {
            this.addTagSet(tagSet);
        }
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