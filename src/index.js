import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

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
      <Route path="/" component={Home} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo}></Route> 
      <Route path="/cadastro/categoria" component={CadastroCategoria}></Route> 
      <Route component={Pagina404}></Route> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
