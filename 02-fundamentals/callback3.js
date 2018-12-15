//// This is a more basic way of understanding callback functions ////

let add = (a, b) => {
    return a + b;
};

let sub = (a, b) => {
    return a - b;
};

let div = (a, b) => {
    return a / b;
};

let mul = function(a, b) {
    return a * b;
};

let mod = (a, b) => {
    return a % b;
};

let show = (a, b) => {
    return `${a} and ${b}`;
};

let theCallback = (err, answer) => {
    if (!err) {
        console.log(answer)
    }
    console.log(err)
};

let doCalc = (num1, num2, callback) => {
    if (mod(num1, num2) != 0) {
        anError = `${num1} is not divisible by ${num2} `;
        return callback(anError);
    }
    anAnswer = `The division of ${num1} into ${num2} is ${div(num1,num2)}`;
    return callback(null, anAnswer);
};

doCalc(24, 10, theCallback);