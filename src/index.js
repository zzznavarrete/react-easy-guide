import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Badge from './components/badges';
import Navbar from './components/Navbar';
import App from './components/App';
//Style
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';


const container = document.getElementById('app');

// ReacDOM.render(__que__, __donde__)
ReactDOM.render(<App/>, container);

