import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './components/task/ToDo';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <ToDo />
  </div>
);