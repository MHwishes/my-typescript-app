import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function App({ name, enthusiasmLevel = 1 }: Props) {

  const [currentEnthusiasm, setCurrentEnthusiasm] = useState(enthusiasmLevel);

  if (currentEnthusiasm < 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name + getExclamationMarks(currentEnthusiasm)}
        </p>
        <button onClick={() => { setCurrentEnthusiasm(currentEnthusiasm - 1) }}>-</button>
        <button onClick={() => { setCurrentEnthusiasm(currentEnthusiasm + 1) }}>+</button>
      </header>
    </div>

  )
}
export default App;

function getExclamationMarks(enthusiasmLevel: number) {
  return Array(enthusiasmLevel + 1).join(`love you `)

}