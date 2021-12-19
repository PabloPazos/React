const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 55321321,
		lat: 14.3232,
		lng: 34.9233321
	}
}

// console.log({persona:persona});
// console.log({persona});

// Dándole el valor de persona a persona 2 solo se está copiando su posición en memoria,
// Es por esto que si le cambio el nombre a persona2, se cambia el original.
// const persona2 = persona;
//Usando el operador spread clona el objeto sin hacer referencia al espacio en memoria.
const persona2 = {...persona}
persona2.nombre = 'Peter';

console.table(persona);
console.log(persona);
console.log(persona2);