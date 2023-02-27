function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        value += +prompt('Введите новое число');
    }
}