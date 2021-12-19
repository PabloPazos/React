describe('Pruebas en el archivo demo.test.js', () => {
	test('Deben de ser iguales los strings', () => {
		const isActive = true;

		// 1. Inicialización.
		const mensaje = 'Hola Mundo';

		// 2. Estímulo.
		const mensaje2 = `Hola Mundo`;

		// 3. Observar el comportamiento.
		expect( mensaje ).toBe( mensaje2 );
	});

	test('Debe de ser true', () => {
		const isActive = true;

		if(!isActive) {
			throw new Error('No está activo');
		}
	})
})

