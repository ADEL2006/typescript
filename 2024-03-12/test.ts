// 2024-03-12

const msg: string = 'Hello';
const num: number = 123;
const bool: boolean = true;

function add(num1: number, num2: number): number {
    return num1 + num2;
};

const plus = (num1: number, num2: number): number => num1 + num2;

let age: number = 30;
let aaa: string = "Johb-m";
console.log(aaa.toUpperCase());

let nameObj = new String("John");

function max(num1: number, num2: number): number {
    if (num1 > num2)
        return num1;
    return num2;
};

console.log(max(1, 2));

// const arr = [10, 20, 30];
// arr.forEach((a: number): number => {
//     console.log(a);
//     return a;
// });

// Array<string>
// string[]

var companies: Array<string> = ['네이버', '삼성', 'LG'];
var companies: string[] = ['네이버', '삼성', 'LG'];
var cards: number[] = [1, 2, 3, 4];

const arr1: [number] = [1];
arr1.push(2);
console.log(arr1);

