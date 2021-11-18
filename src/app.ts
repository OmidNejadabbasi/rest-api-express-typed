
function computeIntegral(a: number, b: number, p: number, fx: (n: number) => number) {

    let step = (b - a) / p;
    let integ = 0;
    for (let i = 0; i < p; i++) {
        integ += fx(a + i * step + step * .5) * step;
    }
    return integ;

}

console.log(computeIntegral(0, 4, 10000, (x) => {
    return 1 / x;
}))

const str = 'omid is doing some typescript';
console.log(str.search('o'));
// search all 'o' s in str

let queue: number[] = []

queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
