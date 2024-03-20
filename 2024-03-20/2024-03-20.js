var merge = function (x, y) { return x.toString() + y.toString(); };
function totallength() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (s) { return sum += s.length; });
    return sum;
}
console.log(totallength('a', 'b', 'c'));
console.log(totallength('hello'));
var arr = ['a', 'b', 'hello'];
console.log(totallength.apply(void 0, arr));
;
var btnEnter = {
    x: 0,
    y: 0,
    width: 20,
    height: 10,
    text: 'Enter',
    draw: function () { return console.log('dfsw'); },
    drawText: function () {
        console.log('drawText');
    }
};
console.log("Button \uC704\uCE58: (".concat(btnEnter.x, ", ").concat(btnEnter.y, ")"));
btnEnter.draw();
;
var postBody = {
    content: 'hello',
    operation: function (arg1, arg2) {
        return arg1.length > arg2.length ? arg1 : arg2;
    }
};
var longerString = postBody.operation("TypeScript", "JS");
console.log("".concat(longerString));
var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
var salary = {
    junior: '100원',
};
var salary2 = {
    junior: '100원',
    mid: '400원',
    senior: '700원'
};
var option1 = {
    useIcon: true,
};
var a = {};
var b = { id: "1" };
