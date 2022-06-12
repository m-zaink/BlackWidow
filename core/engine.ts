export abstract class BWEnginePart {
    async bootUp() {}

    async bootDown() {}
}

export default class BWEngine {
    static readonly shared = new BWEngine();

    // Everytime you declare some sort of BWEnginePart, register it here.
    private parts: BWEnginePart[] = [];

    private constructor() {}

    // All registered parts are booted up from here
    async bootUp() {
        for (const part of this.parts) {
            await part.bootUp();
        }
    }

    // All registered parts are booted down from here
    async bootDown() {
        for (const part of this.parts) {
            await part.bootUp();
        }
    }
}
