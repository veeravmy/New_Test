import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from "./First";
import FrontEnd from "./FrontEnd";
import * as serviceWorker from './serviceWorker';
import Mern from "./Mern";

ReactDOM.render(
  <Mern />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
