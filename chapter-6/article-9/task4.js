function throttle(func, ms) {
    let isCooldown = false;
    let lastArgs, lastThis;
    return function() {
        if(isCooldown) {
            lastArgs = arguments;
            lastThis = this;
            return;
        }

        isCooldown = true;

        func.apply(this, arguments);

        setTimeout(() => {
            func.apply(lastThis, lastArgs);
            lastArgs = lastThis = null;
            isCooldown = false;
        }, ms);
    };
}

function f(...a) {
    console.log(...a)
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);