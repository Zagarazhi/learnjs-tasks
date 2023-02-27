Function.prototype.defer = function(ms) {
    return (...args) => {
        setTimeout(() => this.apply(this, args), ms);
    }
}

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.