import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const ChildComponent = () =>{
  return(
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(new ParentComponent().render());
/* Cuidado con los paréntesis en las llamadas a objetos y funciones */