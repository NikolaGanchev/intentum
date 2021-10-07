// This class stores the last shown modal to prevent multiple modals from closing at once

class ModalStack {
    private readonly modals: string[];

    constructor() {
        this.modals = [];
    }

    push(id: string) {
        this.modals.push(id);
    }

    peek() {
        if (!this.isEmpty()) {
            return this.modals[this.modals.length - 1];
        }
        else {
            return null;
        }
    }

    length() {
        return this.modals.length;
    }

    isEmpty() {
        return this.modals.length === 0;
    }

    pop() {
        this.modals.pop();
    }
}

export const modalStack = new ModalStack();
