import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function App({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel < 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </p>
      </header>
    </div>

  )
}
export default App;

function getExclamationMarks(enthusiasmLevel: number) {
  return Array(enthusiasmLevel + 1).join('!')

}