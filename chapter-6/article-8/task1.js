function printNumbersInterval(from, to) {
    let current = from;

    let counter = setInterval(() => {
        console.log(current);
        if(current === to) {
            clearInterval(counter);
        }
        current++;
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function tick() {
        console.log(current);
        if(current < to) {
            setTimeout(tick, 1000);
        }
        current++;
    }, 1000);
}

//printNumbersInterval(8, 12);
printNumbersTimeout(8, 12);