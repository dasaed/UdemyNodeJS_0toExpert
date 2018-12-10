let spiderman = {
    nombre: 'Peter',
    apellido: 'Parker',
    poder: 'Spidey Sense',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - Super Power: ${this.poder}`;
    },
    getLastName() {
        return `${ this.apellido }`;
    }
}

console.log(spiderman.getNombre());
// let nombre = spiderman.nombre;
// let apellido = spiderman.apellido;
// let poder = spiderman.poder;

//Destructuring refers to creating variables from an object, without having to recreate each variable, one at a time.
let { nombre: primerNombre, apellido, poder } = spiderman;

console.log(primerNombre, apellido, poder);