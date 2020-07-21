import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';


ReactDOM.render(                      // on fait un rendu sur le DOM sur l'élément avec l'id 'root'    
  <React.StrictMode>                  {/* outil qui détecte les problèmes potentiels de ses enfants     */}
    <App />                           {/* on y intègre le composant "App"                               */}
  </React.StrictMode>,
  document.getElementById('root')     
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();