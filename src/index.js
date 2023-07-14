import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyCmpVisibility from './components/MyCmpVisibility';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <MyCmpVisibility />
  </div>
);