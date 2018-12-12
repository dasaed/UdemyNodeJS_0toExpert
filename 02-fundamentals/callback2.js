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
    }
];

//Basic example, of callback function
console.log("Parte 1 - El ejemplo basico");
let getEmpleadoById = (id, callback) => {
    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }

};

getEmpleadoById(1,
    (err, empleado) => {
        //In this function, "empleado" is equivalent to the "empleadoDB" that matches the given ID in the function getEmpleadoById.
        if (err) {
            return console.log(err);
        }
        console.log(empleado);
    }
);



//The exercise is simple, in the following example, we are going to link the 2 tables.








console.log("Parte 2 - Mi solucion para el problema");


let getSalarioById = (id_a_validar) => {
    let salario_a_validar = salarios.find((objeto_dentro_de_salario_a_validar) => { return objeto_dentro_de_salario_a_validar.id === id_a_validar.id });

    if (!salario_a_validar) {
        return `El usuario ${id_a_validar.nombre} no tiene salario`;
    } else {
        let nombre_salario = {
            nombre: `${id_a_validar.nombre}`,
            salario: `${salario_a_validar.salario}`
        };
        return nombre_salario;
    }

};

let getSalarioEmpleadoById = (empleadoID, funcionCallback) => {
    let empleado_a_validar = empleados.find((objecto_dentro_de_empleado_a_validar) => {
        return objecto_dentro_de_empleado_a_validar.id === empleadoID;
    }); // in empleado_a_validar, i'm returnig the employee object that matches the criteria

    if (!empleado_a_validar) {
        funcionCallback(`No existe un empleado con el ID ${empleadoID}`)
    } else {
        funcionCallback(null, getSalarioById(empleado_a_validar));
    }

}


getSalarioEmpleadoById(
    2,
    (err, empleado) => {
        if (err) {
            return console.log(err);
        }
        return console.log(empleado);
    }
);
///////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("Parte 3 - La solucion del profe para el problema");

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find((empleado) => {
        return empleado.id === id;
    });

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }

};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(
            null, {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            }
        );
    }


};

getEmpleado(1,
    (err, empleado) => {
        //In this function, "empleado" is equivalent to the "empleadoDB" that matches the given ID in the function getEmpleadoById.
        if (err) {
            return console.log(err);
        }
        //console.log(empleado);
        getSalario(empleado,
            (err, resp) => {
                if (err) {
                    return console.log(err);
                } else {
                    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
                }
            }
        );
    }
);


console.log("////////////////// End of Program ///////////////////");