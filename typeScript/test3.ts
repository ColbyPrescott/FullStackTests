interface Vec2 {
    x: number,
    y: number
}

interface Vec3 {
    x: number,
    y: number,
    z: number
}

const vec1: Vec2 = {
    x: 5,
    y: 10
};

function printVec(vec: Vec2 | Vec3) {
    console.log(vec);
}

printVec(vec1);
printVec({
    x: 2,
    y: 10,
    z: 15
});