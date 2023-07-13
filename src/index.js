import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './components/MyComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <MyComponent />
  </div>
);