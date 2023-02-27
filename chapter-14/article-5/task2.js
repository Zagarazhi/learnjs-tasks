function isInteger(number) {
    return number === (number ^ 0);
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));