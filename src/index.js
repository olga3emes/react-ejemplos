import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const DemoComponent = function () {
  return (
    <div className='myDivClass'>
      Añadiendo una clase a este div y 
      utilizándolo dentro de una función
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render([DemoComponent()]);

