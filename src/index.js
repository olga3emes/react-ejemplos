import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const jsx_valid = 
<>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
</>;
const jsx_valid2 = 
<div>
<p>Paragraph 4</p>
<p>Paragraph 5</p>
<p>Paragraph 6</p>
</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([
  jsx_valid,
  jsx_valid2]
);

