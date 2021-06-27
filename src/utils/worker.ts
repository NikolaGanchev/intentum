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

const ctx: Worker = self as any;

self.addEventListener("generate", () => {
    console.log("gen")
    store.set(LESSON + "1", firstUnitConfig);

    for (let i = 2; i <= LESSON_AMOUNT; i++) {
        console.log("gen")
        store.set(LESSON + i, otherUnitsConfig);
    }

    for (let i = 1; i <= TEST_POSITIONS.length; i++) {
        console.log("gen")
        store.set(TEST + i, testConfig)
    }

    console.log("fin");
    ctx.postMessage("generateReady");
}, false)

export { };