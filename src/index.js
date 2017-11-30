import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TemperatureApp from './tempApp/TemperatureApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <App />,
  // <TemperatureApp />,
  document.getElementById('root')
);
registerServiceWorker();
