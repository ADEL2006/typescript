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
console.log(btnEnter);
