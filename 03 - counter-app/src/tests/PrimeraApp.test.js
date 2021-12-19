import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
// import { render } from "@testing-library/react";

describe('Pruebas en <PrimeraApp />', () => {
  // test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => {
  //   const saludo = "Hola, Soy Goku";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('Debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtítulo mostrado por props', () => {
    const saludo = 'Hola, Soy Goku';
    const subTitulo = 'Soy un subtítulo';

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find('p').text().trim();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subTitulo);
  });
});
