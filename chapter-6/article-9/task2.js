function delay(func, ms) {
    return (...args) => {
        setTimeout( () => {
            func.apply(this, args);
        }, ms);
    }
}

function f(...x) {
    console.log(...x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", "temp");
f1500("test");