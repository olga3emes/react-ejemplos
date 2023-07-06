import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<h1>Hola gatito!</h1>);
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(new Kitten().render());

/* Cuidado con los paréntesis en las llamadas a objetos y funciones */