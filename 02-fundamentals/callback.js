// setTimeout(() => {
//     console.log("Hola Mundo");
// }, 3000);

let getUsuarioById = (id, callback) => {
    //id es una variable tipo objecto, y callback es una variable tipo funcion
    let usuario = {
        nombre: 'Carlos',
        id: id
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario.nombre);
    }
}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('El nombre del usuario de base de datos es: ', usuario);
});

//getUsuarioByID ( id=20, callback = funcion(err, usuario){ if err, then log err, else, console.log(Nombre del usuario) } )
// In our case, callback becomes equal to:
// callback(err, usuario){
//     if (err) {
//         return console.log(err);
//     }
//     console.log('El nombre del usuario de base de datos es: ', usuario);
// };