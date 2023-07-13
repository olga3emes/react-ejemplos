import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './components/Inicio';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <Inicio />
  </div>
);