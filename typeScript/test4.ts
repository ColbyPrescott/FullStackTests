class Vec2 {
    x: string;
    y: number;

    constructor(y: number) {
        this.x = "a";
        this.y = y;
    }

    print() {
        console.log(`Vec2: (${this.x}, ${this.y})`);
    }
}

const testVec = new Vec2(6);
testVec.print();
console.log("The x value is", testVec.x);