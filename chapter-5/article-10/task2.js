function topSalary(salaries) {
    let top = 0, topName = null;
    for(let [name, salary] of Object.entries(salaries)) {
        if(salary > top) {
            top = salary;
            topName = name;
        }
    }
    return topName;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));