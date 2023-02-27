let user = {
    name: "Василий Иванович",
    age: 35
};

let userToJSON = JSON.stringify(user);
console.log(userToJSON);
let userFromJSON = JSON.parse(userToJSON);
console.log(userFromJSON);