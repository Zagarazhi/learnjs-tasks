let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let temp = Object.values(salaries);
    let sum = 0;
    for(let salary of temp) {
        sum += salary;
    }
    return sum;
}

console.log( sumSalaries(salaries) ); // 650