import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/badges';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import BadgeNew from './pages/BadgeNew';
import Navbar from './components/Navbar';
const container = document.getElementById('app');

// ReacDOM.render(__que__, __donde__)
ReactDOM.render(<BadgeNew
 firstName= "Nicolás"
  lastName= "NN." 
  jobTitle= "Software engineer" 
  twitter= "zzznavarrete" 
  avatarURL= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatarfiles.alphacoders.com%2F160%2F160326.png&f=1&nofb=1"

  />
  , container);

