import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './Parent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
