/*
In javascript, you can input functions into functions.
*/

let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let div = (a, b) => {
    return a / b;
}

let mul = (a, b) => {
    return a * b;
}

let mod = (a, b) => {
    return a % b;
}

let myFun = (num1, num2, operation) {
    if (typeof operation === "function") {
        operation(num1, num2);
    }
}

console.log(myFun(8, 10, add));