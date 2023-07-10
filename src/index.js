import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingCart from './components/shop/ShoppingCart';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <ShoppingCart />
  </div>
);