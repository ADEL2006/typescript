function getUseerInfo(): [string, number] {
    // 가정: user 객체에서 정보를 가져온다
    const user = {
        name: 'Alice',
        age: 25
    };
    return [user.name, user.age];
}

const [userName, userAge] = getUseerInfo();
console.log(`사용자 이름: ${userName}`, `사용자 나이: ${userAge}`);

const dan: number[] = [];

for (let i = 1; i <= 10; i++) {
    dan.push(i * 2);
}
console.log(dan);

function swap(arg: [number, number]): [number, number] {
    return [arg[1], arg[0]];
}
console.log(swap([5, 10]));

function sayMyName(firstname: string, lastname: string): string {
    return `my name: ${firstname} ${lastname}`;
};

console.log(sayMyName('kim', 'tae'));

function toLocationstring(arg: { x: number, y: number }) {

}
const result = toLocationstring({ x: 0, y: 0 });
console.log(result);

function printPoint(arg: { x: number, y: number, color?: string }) {
    if (arg.color !== undefined) { // color값이 undefined가 아니라면
        console.log(arg.x, arg.y, arg.color);
    } else {
        console.log(arg.x, arg.y);
    }
}

printPoint({ x: 0, y: 0, color: 'red' });
printPoint({ x: 1, y: 1 });

const arr2: { x: number, y: number }[] = [];
arr2.push({ x: 0, y: 0 });
arr2.push({ x: 1, y: 1 });

console.log(arr2);

function logText(text: string | number) {
    console.log(text);
}

logText('hi');
logText(100);

function test(arg: string | number) {
    if (typeof arg == 'number') {
        return arg;
    } else {
        return arg.length;
    }
}
console.log(test(1));
console.log(test('hello'));

const arr3: (number | boolean)[] = [];

arr3.push(1);
arr3.push(true);
arr3.push(2);
arr3.push(false);
arr3.push(3);

arr3.forEach((i) => { console.log(typeof i) });

function info(user: { id: number | string, userName: string }) {
    console.log(user.id, user.userName);
}
info({ id: 1, userName: 'u1' });
info({ id: '2', userName: 'u2' });

interface Animal { name: string };
interface Bear extends Animal {
    honey: boolean;
};
const bear = { name: 'Pooth', honey: true };

type TELEPHONE = string | number;
function printTelephone(telephone: TELEPHONE) {
    console.log(telephone);
}
printTelephone('010-1111-1111');
printTelephone(102222222);

type User = {
    id: string,
    userName: string
};
type Admin = {
    id: string,
    userName: string,
    level: number
}

const user: User = { id: 'u1', userName: 'userOne' };
const admin: Admin = { id: 'a1', userName: 'admin1', level: 1 };
info(user);
info(admin);
