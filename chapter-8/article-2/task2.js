function Rabbit(name) {
    this.name = name;
}

let rabbit1 = new Rabbit('White');
let rabbit2 = new rabbit1.constructor('Black');
console.log(rabbit2.name);