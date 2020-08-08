import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Pagina404 () {
  return(
    <div>
      <h1>Página 404</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route component={Pagina404}></Route> 
    </Switch>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
