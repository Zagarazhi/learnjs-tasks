function* pseudoRandom(seed) {
    let value = seed;

    while(true) {
        value = value * 16807 % 2147483647
        yield value;
    }
}

let gen = pseudoRandom(1);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);