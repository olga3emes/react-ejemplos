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
const jsx = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
const challenge_node = ReactDOM.createRoot(document.getElementById('challenge-node'));
root.render([
  jsx_valid]
);
challenge_node.render([jsx]);

