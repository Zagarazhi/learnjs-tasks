function Calculator() {

    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
    }

    this.calculate = function(str) {
        let splited = str.split(' ');
        let a = +splited[0];
        let operation  = splited[1];
        let b = +splited[2];

        if (!this.methods[operation] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[operation](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8