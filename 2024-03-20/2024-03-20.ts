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
// type User = {
//     UserId: string;
//     password: string;
// }
// type Admin = User & {
//     categories: string[];
// }

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
    x: 0,
    y: 0,
    width: 20,
    height: 10,
    text: 'Enter',
    draw: () => console.log('dfsw'),
    drawText() {
        console.log('drawText');
    }
}

console.log(`Button 위치: (${btnEnter.x}, ${btnEnter.y})`);
btnEnter.draw();

interface ContentBody {
    content: string,
    operation: (s1: string, s2: string) => string;
};

const postBody: ContentBody = {
    content: 'hello',
    operation(arg1: string, arg2: string): string {
        return arg1.length > arg2.length ? arg1 : arg2;
    }
}
const longerString = postBody.operation("TypeScript", "JS");
console.log(`${longerString}`);

type GreetFunction = (name: string) => string;

let greet: GreetFunction = function (name: string) {
    return `Hello, ${name}!`;
};

interface SalaryMap {
    [level: string]: string;
}

var salary = {
    junior: '100원',
}

interface SalaryInfo {
    junior: string,
    mid: string,
    senior: string,
}

var salary2: SalaryInfo = {
    junior: '100원',
    mid: '400원',
    senior: '700원'
}

type OptionType = 'useIcon' | 'useTitle' | 'useCancel';

type popupOption = {
    [key in OptionType]: boolean;
}
const option1: Partial<popupOption> = {
    useIcon: true,
}

interface Hero {
    name: string;
    skill: string;
}

type HeroPropCheck = {
    // [H in ketof Hero]: boolean;
    [H in keyof 'name' | 'skill']: boolean;
}

interface Profile {
    id: string;
    address: string;
    name: string;
}

type ProfileId = Pick<Profile, 'id' | 'name'>;

type User = Omit<Profile, 'address'>;

type Optional = Partial<Profile>;
var a: Optional = {};
var b: Optional = { id: "1" };

// Exclude: 유니언 타입에서 특정 타입을 제외
type Lang = "C" | "Java" | "TypeScript" | "React";
type LangEx = Exclude<Lang, "Java" | "C">;

// Record: 타입 1개는 속성의 키, 다른 타입 1개는 속성 값 받아서 객체 타입으로 변환
type HeroProfile = {
    skill: string;
    age: number;
}
type Heronames = "aaa" | "bbb" | "ccc";
type Heros = Record<Heronames, HeroProfile>;
var avenger: Heros = {
    "aaa": {
        skill: "dd",
        age: 100
    },
    "bbb": {
        skill: "ee",
        age: 101
    },
    "ccc": {
        skill: "ff",
        age: 102
    }
}

interface TodoItem {
    id: number;
    title: string
    done: boolean;
}
let todoItems: TodoItem[]
// function fetchTodoItems(): { id: number; title: string; done: boolean }[] {
//     const todos = [
//         { id: 1, title: '안녕', done: false },
//         { id: 2, title: '타입', done: false },
//         { id: 3, title: '스크립트', done: false },
//     ];
//     return todos;
// }
function fetchTodoItems(): TodoItem[] {
    const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}

function fetchTodos(): TodoItem[] {
    const todos: TodoItem[] = fetchTodoItems();
    return todos;
}
function addTodo(todo: TodoItem): void {
    todoItems.push(todo);
}
function deleteTodo(index: number) {
    todoItems.splice(index, 1);
}
function completetodo(index: number, todo: TodoItem) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

function logFirstTodo(): TodoItem {
    return todoItems[0];
}

function showCompleted(): TodoItem[] {
    return todoItems.filter(item => item.done);
}