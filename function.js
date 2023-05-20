//Funciones Declarativas

function saludar(nombre){

    console.log(`Bienvenido ${nombre}`)

}

saludar('Juan Perez')

//Funciones de Expresion

const cliente = function(NombreCliente){
    console.log(`Mostrando datos cliente: ${NombreCliente}`)
}

cliente('Ayrton Barreto')

//Funciones para sumar numeros 
const suma = function(a,b){
    return a + b; //cualquier operador 
}

let resultado = suma(5,2);

console.log(resultado);

//Funciones por parametros por default/defecto
function actividad(nombre = 'Ayrton Barreto', profesion = 'Ingeniero en Telecomunicaciones'){
    console.log(`La persona ${nombre}, profesion ${profesion}`)
}

actividad();
actividad('Juan Perez', 'Desarrollador web')
actividad('ernesto ledesma', 'desarrolador web');

