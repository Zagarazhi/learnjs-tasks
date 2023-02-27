let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if(prop < 0) {
            prop = target.length + +prop;
        }
        return Reflect.get(...arguments);
    }
});

console.log(array[-1]);
console.log(array[-2]);