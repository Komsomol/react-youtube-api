import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Player from './Player';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Player />, document.getElementById('player'));




registerServiceWorker();
