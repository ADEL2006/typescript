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
