import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Player from './Player';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Player api='https://top-100-billboard.herokuapp.com/genre/'/>, document.getElementById('player'));

registerServiceWorker();
