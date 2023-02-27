function sumRecursional(n) {
    if(n === 1) {
        return 1;
    }
    return n + sumRecursional(n - 1);
}

function sumIterational(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumArithmetical(n) {
    return (1 + n) * n / 2;
}