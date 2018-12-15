//DB table with object of {id|name}
console.log("////////////////// Beginning of Program ///////////////////");
let empleados = [{
        id: 1,
        nombre: 'Joshua'
    },
    {
        id: 2,
        nombre: 'Dasaed'
    },
    {
        id: 3,
        nombre: 'Javier'
    }
];
//DB table with object of {id|salary}
let salarios = [{
        id: 1,
        salario: 2030
    },
    {
        id: 2,
        salario: 3500
    },
];


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
        } else {
            let respuesta = {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
            resolve(respuesta);
        }
    })
};


let getEmpleado = (id) => {
    // return new Promise ( (“Function1”,“Function2”)=> { your function here, where Function1 = resolve callback, and Function2  = reject Call back or error callback. }   )
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            let mensajeError = `No existe un empleado con el ID ${id}`;
            reject(mensajeError);
        } else {
            //let fullEmpleado =
            resolve(empleadoDB); // solo se puede regresar una variable. si hay multiples datos, se deben adjuntar como un solo objeto.
        }
    });
};

getEmpleado(1).then(empleado => {
    console.log(empleado)
}, err => console.log(err));

getEmpleado(3).then((empleado) => {
        getSalario(empleado).then(
            resp => {
                console.log(`El salario de ${resp.nombre} es de ${ resp.salario} `);
            }, (err) => console.log(err)
        );
    },
    (err) => console.log(err)
);

/// encadenando promesas de la manera correcta ///

getEmpleado(10).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${ resp.salario}`);
    })
    .catch(err => { console.log(err) })




console.log("////////////////// End of Program ///////////////////");