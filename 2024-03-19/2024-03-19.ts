function printAll(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

function caller(callback: (str: string) => number) {
    callback("Hello");
}

function func(str: string): number {
    return str.length;
}

caller(func);
caller((str: string): number => { return 0; });

function ex(arg: number, f:(num: number) => number) {
    return f(arg);
}