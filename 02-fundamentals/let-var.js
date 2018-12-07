var nombre = 'wolverine';
console.log(nombre);

if (true) {
    var nombre = 'magneto';
}

var nombre = 'cyclops';

console.log(nombre);

let name = 'spiderman';

if (true) {
    let name = 'thor';
    console.log(name);
}
console.log(name);
name = 'Captain America';
console.log(name);

for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}
console.log(`The for loop was exited when i = 6, but it doesn't print anything out. However, because the value of 6 was assigned, I can see the actual current value of i, which is ${i}`);