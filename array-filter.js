//array de objetos
const personasData = [
    {nombre: 'Juan', Edad: 20, profesion: 'Diiseñador'},
    {nombre: 'Pablo', Edad: 32, profesion: 'ingeniero'},    
    {nombre: 'ale', Edad: 44, profesion: 'developer front'},
    {nombre: 'karen', Edad: 30, profesion: 'devolper back'}
]

console.log(personasData);

//filtrar mayores de 25
const mayores = personasData.filter(persona => persona.Edad > 25);

console.log(mayores);

const fiberData = [
    {marca: 'next', nm: 20, tipo: 'multimodo'},
    {marca: 'tuki', nm: 32, tipo: 'indice grad'},
    {marca: 'jufu', nm: 44, tipo: 'indice grad'},
    {marca: 'aja', nm: 22, tipo: 'multimodo'}
]


const multimo = fiberData.filter(fiber => fiber.tipo === 'multimodo');
console.log(multimo);