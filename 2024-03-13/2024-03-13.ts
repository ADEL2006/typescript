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