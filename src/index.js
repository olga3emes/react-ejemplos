import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TypesOfFood from './components/food/TypesOfFood'

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <TypesOfFood />
  /* Si utilizamos etiquetas es más sencillo */
);