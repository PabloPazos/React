import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
	test('getSaludo debe de retornar Hola Pablo!', () => {
		const nombre = 'Pablo';
		
		const saludo = getSaludo(nombre);

		expect( saludo ).toBe('Hola ' + nombre + '!');
	})

	// getSaludo debe de retornar Hola Carlos! si no hat argumento en nombre.
	test('getSaludo debe de retornar Hola Carlos! si no hat argumento en nombre', () => {
		const saludo = getSaludo();

		expect( saludo ).toBe('Hola Carlos!');
	})
})