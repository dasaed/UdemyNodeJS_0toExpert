console.log("Inicio del Programa");

setTimeout(function() {
    console.log("Primer Timeout")
}, 3000); //end of timeout

setTimeout(function() {
    console.log("Segundo Timeout")
}, 0); //end of timeout

setTimeout(function() {
    console.log("Tercer Timeout")
}, 0); //end of timeout
console.log("fin del programa");