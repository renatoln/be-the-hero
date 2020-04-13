import React from 'react';
//import Header from './Header';
import './global.css'
import Routes from './routes'


function App() {
  return (
    <Routes />
  );

}
/*

import React, { useState } from 'react';
// componente do react - função que retorna um html
// html dentro do codigo js => JSX - JavaScript XML
// atualização ao salvar => live reaload
function App() {
  const [counter, setCounter] = useState(0); //0 = primeiro valor

  function increment() {
    setCounter(counter + 1);
  }


  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>

  );
}
*/

/*
function App() {
  return (
    <Header title="Semana OmniStack" />
  );
}
*/
export default App;
