import React from 'react';
import ReactDOM from 'react-dom';

const jsx = <h1>Hello, Platzi Badges from react!</h1>;
/* const element = React.createElement('a', { 
  href: 'https://platzi.com' 
},
'Ir a platzi'); */

// Le puedo pasar variables para que las renderice 
const name = 'zzznavarrete';
const element = React.createElement('h1', {}, `Hola, me llamo ${name}`)

const container = document.getElementById('app');

// ReacDOM.render(__que__, __donde__)
ReactDOM.render(element, container);

