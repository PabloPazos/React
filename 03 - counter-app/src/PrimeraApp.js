import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ saludo, subtitulo }) => {
	const handleAdd = (e) => {
		console.log(e);
	};

	return (
		<>
			<h1> {saludo} </h1>
			<p> {subtitulo} </p>
			<button onClick={handleAdd}>+1</button>
		</>
	);
};

PrimeraApp.propTypes = {
	/* Obliga a pasar la prop con el tipo de dato re*/
	saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtítulo',
};

export default PrimeraApp;
