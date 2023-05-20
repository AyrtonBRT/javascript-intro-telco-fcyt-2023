

let viajando = function(destino){
    return `viajando a ${destino}`
}

let viaje;
viaje = viajando('paris');
viaje = viajando('barcelona');
viaje = viajando('sanjo');

console.log(viaje);

//arrow functions

let viajando2 = (destino, duracion) => {
    return `viajando a ${destino} por ${duracion}`;
}

let viaje2;
viaje2 = viajando2('dubai', '30 dias');
console.log(viaje2);

