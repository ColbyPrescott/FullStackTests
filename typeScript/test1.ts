let a: number = 0;
let b: number = 1;

for(let i: number = 0; i < 15; i++) {
    console.log(a);
    let c: number = a + b;
    a = b;
    b = c;
}