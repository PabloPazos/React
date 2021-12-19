import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
	const [counter, setCounter] = useState(value);

	// const handleAdd2 = (e) => {
	// 	return ()=> console.log('Devuelve una función')
	// }
	const handleAdd2 = () => {
		/* No se puede usar counter++ porque react no deja mutar el state, para eso ya hay funciones. */
		// setCounter( counter + 1);
		setCounter((c) => c + 1);
	};

	const handleSubtract = () => setCounter(counter - 1);

	const handleReset = () => setCounter(value);

	return (
		<>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			<button onClick={handleAdd2}>+1</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleSubtract}>-1</button>
			{/*<button onClick={ ()=> setCounter( value ) } >Reset</button>
			<button onClick={ ()=> setCounter( counter - 1 ) } >-1</button>*/}
		</>
	);
};

export default CounterApp;
