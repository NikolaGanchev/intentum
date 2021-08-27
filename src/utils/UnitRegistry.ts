class UnitRegistry {
    private map: Map<string, (props: any) => JSX.Element>;

    constructor() {
        this.map = new Map<string, (props: any) => JSX.Element>();
    }

    register(id: string, element: (props: any) => JSX.Element) {
        this.map.set(id.toLowerCase(), element);
    }

    get(id: string): (props: any) => JSX.Element {
        if (this.map.has(id)) {
            return this.map.get(id.toLowerCase())!;
        }
        else {
            throw new Error("Component not found");
        }
    }
}

export const registry = new UnitRegistry();