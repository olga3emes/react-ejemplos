import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyCmpButton from './components/MyCmpButton';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <MyCmpButton />
  </div>
);