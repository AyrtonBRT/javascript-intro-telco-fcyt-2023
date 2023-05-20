let lenhuajes = ['Java', 'PHP', 'Python', 'C'];
let framework = ['1', '2', '3', '4' ]

//Unir los arreglos en uno solo
let concatenar = lenhuajes.concat(framework);

//spred operator
let concatenar2 =[...lenhuajes, ...framework];
//realiza muchas tarea la + importante unir arreglos, los 3 puntitos

console.log(concatenar);
console.log(concatenar2);

//reverse
let [ultimo] = [... lenhuajes].reverse();
console.log(ultimo);

