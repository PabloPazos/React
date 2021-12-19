const personajes = ['Goku', 'Vegeta', 'Trunks'];
/* Desestructuración */
const [ , , p3 ] = personajes;
console.log(p3)

const retornaArreglo = () => {
	return ['ABC', 123];
};

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/* Esto sigue siendo un arreglo, un string y una función. */
const useState = ( valor ) => {
	return [valor, ()=> {
		console.log('Hola Mundo')
	}];
};

// const arr = useState( 'Goku' );
const [ nombre, setNombre ] = useState ( 'Goku' );

console.log(nombre);
setNombre();

/* ---------------------------------------------------------------- */
const practica = valor => [valor, ()=> {console.log('el sayayin')}];

const [ nombre2, setNombre2 ] = practica ('Vegeta');

console.log(nombre2);
setNombre2();
