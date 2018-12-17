import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Cardlist from "./Cardlist"
import {Robots} from "./Robots";

ReactDOM.render(
   <Cardlist Robots = {Robots}/>
, document.getElementById('root'));

serviceWorker.unregister();
