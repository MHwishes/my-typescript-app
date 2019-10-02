import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<App name='Daniel' />);
  expect(hello.find("p").text()).toEqual('Hello Daniellove you ')
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<App name='hongma' enthusiasmLevel={-2} />);
  }).toThrow();
});