//Puedo evitar importar Component porque no tiene STATE
//import React, { Component } from 'react';
import React from 'react';

import './App.css';

import Routes from './routes';

/* Puedo reemplazar esto, por una constante 
   con arrow function y como solo tiene un return
   no preciso colocar la palabra return.

class App extends Component {
  render() {
    return <Main />;
  }
}
*/

const App = () => <Routes />;

export default App;



