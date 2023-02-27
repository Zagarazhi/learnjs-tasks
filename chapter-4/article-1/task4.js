function sum(salaries) {
    let result = 0;
    for(let key in salaries) {
        result += salaries[key];
    }
    return result;
}