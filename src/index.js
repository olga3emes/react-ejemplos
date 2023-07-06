import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const camelCase =(
  <div className="myDivClass">
    {/* no podemos usar <></> */}
    <p>Añadiendo una clase a este div</p>
  </div>
);
const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render([camelCase]);

