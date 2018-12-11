// setTimeout(() => {
//     console.log("Hola Mundo");
// }, 3000);
var usuario = {
    nombre: null,
    id: null
};

let getUsuarioById = (id) => {
    //id es una variable tipo objecto, y callback es una variable tipo funcion
    usuario = {
        nombre: 'Carlos',
        id: id
    }

    if (id === 20) {
        console.log(`${ id }`);
        callBack(`El usuario con id ${id}, no existe en la base de datos`);
    } else {
        callBack(null, usuario.nombre);
    }
}

function callBack(err, name) {
    if (err) {
        return console.log(err);
    }
    console.log('El nombre del usuario de base de datos es: ', name);
};

getUsuarioById(20, callBack());

//getUsuarioByID ( id=20, callback = funcion(err, usuario){ if err, then log err, else, console.log(Nombre del usuario) } )
// In our case, callback becomes equal to:
// callback(err, usuario){
//     if (err) {
//         return console.log(err);
//     }
//     console.log('El nombre del usuario de base de datos es: ', usuario);
// };