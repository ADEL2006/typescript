interface Merge {
    (x: number, y: number): string;
    (x: string, y: string): string;
}
const merge: Merge = (x: any, y: any) => x.toString() + y.toString();

function totallength(...args: string[]): number {
    let sum = 0;
    args.forEach(s => sum += s.length);
    return sum;
}
console.log(totallength('a', 'b', 'c'));
console.log(totallength('hello'));
const arr = ['a', 'b', 'hello'];
console.log(totallength(...arr));

// interface는 extends로 확장
// type은 &로 확장 할 수 있다.

// interface User{
//     userId: string;
//     password: string;
// }
// interface Admin extends User{
//     categories: string[];
// }
type User = {
    UserId: string;
    password: string;
}
type Admin = User & {
    categories: string[];
}

interface widget {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Button extends widget {
    text: string;
    color?: string;
    draw: () => void;
    drawText(): void;
};
const btnEnter: Button = {
    x:0,
    y:0,
    width: 20,
    height: 10,
    text:'Enter',
    draw: () => console.log('dfsw'),
    drawText(){
        console.log('drawText');
    }
}

console.log(btnEnter);