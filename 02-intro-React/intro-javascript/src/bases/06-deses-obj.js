// Desestructuración o asignación desestructurante

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman'
};

const {nombre:nombre2} = persona; 
const {nombre, edad, clave } = persona;
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
console.log(nombre);
console.log(edad);
console.log(clave);

console.log(nombre2)

// const retornaPersona = (usuario) => {
// 	const {nombre, edad, clave } = usuario;
// 	console.log(usuario)
// 	console.log(nombre, edad, clave)
// };

const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
	// console.log(nombre, edad, clave, rango)
	// console.log(persona)
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.1232,
			lng: -12.3232
		}
	}
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);
// const { lat, lng } = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);

/* -------------------------------------------------------------------- */

const animal = {
	nombre: 'Canela',
	especie: 'Perro',
	edad: 9,	
	sexo: 'hembra'
};

const {nombre, especie, edad, sexo} = animal;

console.log(nombre);

const getData = ({nombre, especie, edad, sexo}) => {
	return {
		nombrePublic: nombre,
		especiePublic: especie,
		edadPublic: edad,
		sexoPublic: sexo
	}
};

const {nombrePublic, especiePublic, edadPublic, sexoPublic} = getData(animal);
console.log(nombrePublic, especiePublic, edadPublic, sexoPublic);