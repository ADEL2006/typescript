function printAll(strs) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
function caller(callback) {
    var result = callback("Hello");
    console.log(result);
}
function func(str) {
    return str.length;
}
caller(func);
caller(function (str) { return 0; });
function ex(arg, f) {
    return f(arg);
}
var square = function (num) { return num * num; };
function toggleSign(num) {
    return -num;
}
console.log(ex(2, square));
console.log(ex(3, square));
function middle(arr) {
    var index = Math.floor((arr.length / 2));
    return arr[index];
}
var arr = [1, 2, 3, 4, 5];
var arr2 = ['a', 'b', 'c', 'd'];
console.log(middle(arr));
console.log(middle(arr2));
function getRange(num1, num2) {
    var arr = [];
    var start = num2 === undefined ? 0 : num1;
    var end = num2 === undefined ? num1 : num2;
    for (var i = start; i < end; i++)
        arr.push(i);
    return arr;
}
console.log(getRange(3));
console.log(getRange(1, 3));
