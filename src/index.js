import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const jsx_valid = 
<>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
{/* Esto es un comentario
y puede tener
varias líneas */}
<p>Paragraph 3</p>
</>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([
  jsx_valid]
);

