import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './components/Welcome';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <Welcome  user='Mark'/>
);