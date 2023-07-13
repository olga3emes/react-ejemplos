import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CampSite from './components/camp/Campsite';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <div className='paddingTres'>
    <CampSite />
  </div>
);