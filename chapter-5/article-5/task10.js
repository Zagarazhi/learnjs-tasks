function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let index = Math.floor(Math.random() * (i + 1));
        [array[i], array[index]] = [array[index], array[i]];
    }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);
shuffle(arr);
console.log(arr);