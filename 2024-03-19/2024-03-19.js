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
    callback("Hello");
}
function func(str) {
    return str.length;
}
caller(func);
caller(function (str) { return 0; });
function ex(arg, f) {
    return f(arg);
}
