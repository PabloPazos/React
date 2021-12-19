const nombre = 'Pablo';
const apellido = 'Pazos';

// const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo() {
	return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)