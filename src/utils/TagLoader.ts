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
        const results: TagMatch[] = [];

        this.tags.forEach((value: string[], key: string) => {
            if (results.length >= maxResults) {
                return;
            }
            for (let val of value) {
                const index = val.indexOf(normalised);
                if (index !== -1) {
                    results.push(new TagMatch(key, val, index, normalised.length));
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

export class TagMatch {
    id: string;
    tag: string;
    matchIndex: number;
    matchLength: number;
    html: any | null = null;

    constructor(id: string, tag: string, matchIndex: number, matchLength: number) {
        this.id = id;
        this.tag= tag;
        this.matchIndex = matchIndex;
        this.matchLength = matchLength;
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