function getUseerInfo() {
    // 가정: user 객체에서 정보를 가져온다
    var user = {
        name: 'Alice',
        age: 25
    };
    return [user.name, user.age];
}
var _a = getUseerInfo(), userName = _a[0], userAge = _a[1];
console.log("\uC0AC\uC6A9\uC790 \uC774\uB984: ".concat(userName), "\uC0AC\uC6A9\uC790 \uB098\uC774: ".concat(userAge));
var dan = [];
for (var i = 1; i <= 10; i++) {
    dan.push(i * 2);
}
console.log(dan);
function swap(arg) {
    return [arg[1], arg[0]];
}
console.log(swap([5, 10]));
function sayMyName(firstname, lastname) {
    return "my name: ".concat(firstname, " ").concat(lastname);
}
;
console.log(sayMyName('kim', 'tae'));
function toLocationstring(arg) {
}
var result = toLocationstring({ x: 0, y: 0 });
console.log(result);
function printPoint(arg) {
    if (arg.color !== undefined) { // color값이 undefined가 아니라면
        console.log(arg.x, arg.y, arg.color);
    }
    else {
        console.log(arg.x, arg.y);
    }
}
printPoint({ x: 0, y: 0, color: 'red' });
printPoint({ x: 1, y: 1 });
var arr2 = [];
arr2.push({ x: 0, y: 0 });
arr2.push({ x: 1, y: 1 });
console.log(arr2);
function logText(text) {
    console.log(text);
}
logText('hi');
logText(100);
function test(arg) {
    if (typeof arg == 'number') {
        return arg;
    }
    else {
        return arg.length;
    }
}
console.log(test(1));
console.log(test('hello'));
var arr3 = [];
arr3.push(1);
arr3.push(true);
arr3.push(2);
arr3.push(false);
arr3.push(3);
arr3.forEach(function (i) { console.log(typeof i); });
function info(user) {
    console.log(user.id, user.userName);
}
info({ id: 1, userName: 'u1' });
info({ id: '2', userName: 'u2' });
;
;
var bear = { name: 'Pooth', honey: true };
function printTelephone(telephone) {
    console.log(telephone);
}
printTelephone('010-1111-1111');
printTelephone(102222222);
function info1(user) {
    console.log(user.userName);
}
var user = { id: 'u1', userName: 'userOne' };
var admin = { id: 'a1', userName: 'admin1', level: 1 };
info1(user);
info1(admin);
;
;
function printAll(user) {
    console.log(user.id, user.name);
}
printAll({ id: 1, name: 'user' });
