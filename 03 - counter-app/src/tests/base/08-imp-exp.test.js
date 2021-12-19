import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de héroes', () => {
	test('Debe de retornar un héroe por id', () => {
		const id = 1;
		const heroe = getHeroeById( id );
		const heroeData = heroes.find( h => h.id === id );

		expect ( heroe ).toEqual( heroeData );
	})

	test('Debe de retornar undefined si el héroe no existe', () => {
		const id = 10;
		const heroe = getHeroeById( id );

		expect ( heroe ).toBe( undefined );
	})

	test('Debe de retornar un arreglo con los héroes de DC', () => {
		const owner = 'DC';
		const empresa = getHeroesByOwner( owner );
		const ownerData = heroes.filter( heroe => heroe.owner === owner );

		expect( empresa ).toEqual( ownerData );
	})

	test('Debe de retornar el tamaño del arreglo con los héroes de Marvel', () => {
		const owner = 'Marvel';
		const arr = getHeroesByOwner( owner );

		expect( arr.length ).toBe( 2 );
	})
})