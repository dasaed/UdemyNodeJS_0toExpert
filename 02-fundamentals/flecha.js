//function sumar(a, b) {
//    return a + b;
//}


// Arrow Function:
// Arrow functions cannot be used with "this", because this "this" would point to the Global object, and not the object we want.

let funcionesFlecha = () => `Arrow functions`;

console.log(funcionesFlecha());

let sumar = (a, b) => {
        return a + b;
    } // functions with many variables
let restar = (a, b) => a - b; // single line functions


console.log(sumar(10, 20));
console.log(restar(sumar(2, 5), 4));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regenaration',
    getNombre() {
        return `${this.nombre} ${this.apellido} - Power: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());