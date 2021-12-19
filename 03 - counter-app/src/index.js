import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');
const divCounterApp = document.querySelector('#counterApp');

// console.log(divRoot);

/* <PrimeraApp saludo="Hola, soy Goku"/> */
// ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/> , divRoot );
// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku" />, divRoot);
ReactDOM.render(<CounterApp value={10} />, divCounterApp);
