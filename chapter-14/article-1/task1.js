let user = {
    name: 'John',
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(...arguments);
            }
            return new Error(`Поля ${prop} нет в объекте`);
        }
    });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);