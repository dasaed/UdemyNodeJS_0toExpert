let nombre = 'deadpool';
let real = 'wade wilson';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre}: ${real}`;
}

console.log(`Superhero: ${ getNombre()}`);

console.log('The literal string templates refer to the ` ` quotations, which allow you to use javascript functions and variables within them, without having to concatenate strings')