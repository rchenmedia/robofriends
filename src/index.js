import React from 'react';        //view library, core package dom manipulation
import ReactDOM from 'react-dom'; //can plug and play different packages based on screen, like native for mobile
import './index.css';             //same directory stylesheet
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
