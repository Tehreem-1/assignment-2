"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(num1, num2, operation) {
    const result = operation(num1, num2);
    console.log('The result is :', result);
}
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
    else {
        return ("Error ! Cannot divide by zero");
    }
}
calculate(5, 5, add);
calculate(5, 2, subtract);
calculate(2, 2, multiply);
calculate(1, 0, divide);
