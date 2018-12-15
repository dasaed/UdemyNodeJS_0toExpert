/*
In javascript, you can input functions into functions.
*/

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

let calc = function(num1, num2, operation) {
    return operation(num1, num2);
};

console.log("The value  of the calcuation is: " + calc(10, 6, mod));

var myArray = [{
        number: 34,
        name: 'Erika'
    },
    {
        number: 15,
        name: 'Joshua'
    },
    {
        number: 12,
        name: 'Elkin'
    },
    {
        number: 94,
        name: 'Omega'
    },
    {
        number: 1,
        name: 'Alpha'
    }

];

myArray.sort(function(val1, val2) {
    if (val1.number < val2.number) {
        return -1;
    } else {
        return 1;
    }
});
console.log(myArray)