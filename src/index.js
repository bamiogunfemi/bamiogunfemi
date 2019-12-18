import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line 
import tachyons from 'tachyons';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));

serviceWorker.register();
