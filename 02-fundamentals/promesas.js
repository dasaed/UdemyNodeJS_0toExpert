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

let getEmpleado = (id) => {
    // return new Promise ( (“Function1”,“Function2”)=> { your function here, where Function1 = resolve callback, and Function2  = reject Call back or error callback. }   )
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
};

getEmpleado(2).then(
    empleado => {
        console.log('Empleado de BD:', empleado)
    },
    (err) => {
        console.log(err);
    }
);

console.log("////////////////// End of Program ///////////////////");