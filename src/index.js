import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StatefulComponent from './components/StatefulComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <StatefulComponent />
  </div>
);