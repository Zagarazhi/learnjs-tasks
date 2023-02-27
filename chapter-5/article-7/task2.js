function aclean(arr) {
    let result = new Map();
    for(let str of arr) {
        sorted = str.toLowerCase().split('').sort().join('');
        result.set(sorted, str);
    }
    return Array.from(result.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"