function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

function caller(callback: (str: string) => number) {
    var result = callback("Hello");
    console.log(result);
}

function func(str: string): number {
    return str.length;
}

caller(func);
caller((str: string): number => { return 0; });

function ex(arg: number, f: (num: number) => number) {
    return f(arg);
}

const square = (num: number) => num * num;
function toggleSign(num: number) {
    return -num;
}
console.log(ex(2, square));
console.log(ex(3, square));

// function middle<T>(arr: T[]): T {
//     const index = Math.floor((arr.length / 2));
//     return arr[index];
// }

// const arr = [1, 2, 3, 4, 5];
// const arr2 = ['a', 'b', 'c', 'd'];

// console.log(middle(arr));
// console.log(middle(arr2));

function getRange(num1: number, num2?: number): number[] {
    const arr: number[] = [];
    const start = num2 === undefined ? 0 : num1;
    const end = num2 === undefined ? num1 : num2;
    for (let i = start; i < end; i++)
        arr.push(i);
    return arr;
}
console.log(getRange(3));
console.log(getRange(1, 3));