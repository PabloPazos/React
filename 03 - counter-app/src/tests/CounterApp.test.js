import React from 'react';
import {shallow} from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {
	// Bastaría con poner 'let wrapper;' pero pierdo los scopes de las funcionalidades.
	// No es la mejor práctica, pero preferible esto a perder funcionalidades.
	let wrapper = shallow(<CounterApp />);

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('Debo de mostrar <CounterApp /> correctamente', () => {
		const wrapper = shallow(<CounterApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de mostrar el valor por defecto de 100', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		/* .trim borra los espacios a ambos lados. */
		const counterText = wrapper.find('h2').text().trim();
		console.log(counterText);
		expect(counterText).toBe('100');
	});

	test('Debe de incrementar con el botón de +1', () => {
		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('11');
	});

	test('Debe de decrementar con el botón de -1', () => {
		wrapper.find('button').at(2).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('9');
	});

	test('Debe de colocar el valor por defecto con el btn reset', () => {
		const wrapper = shallow(<CounterApp value={105} />);
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		console.log(counterText);
		expect(counterText).toBe('105');
	});
});
