import React from 'react';
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Lineal from '../pages/Lineal';
import Ordenamiento from '../pages/Ordenamiento';
import Arborea from '../pages/Arborea';
import NotFound from '../pages/NotFound';
import LinealEC from '../pages/LinealEC';
import LinealPC from '../pages/LinealPC';

function  App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/TytusDS/frontend/build/" component={Home} />
            <Route exact path="/TytusDS/frontend/build/Lineales" component={Lineal} />
            <Route exact path="/TytusDS/frontend/build/Ordenamientos" component={Ordenamiento} />
            <Route exact path="/TytusDS/frontend/build/Arboreas" component={Arborea} />
            <Route exact path="/TytusDS/frontend/build/Lineales/EnlazadaSimple" component={LinealEC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/CircularDoble" component={LinealEC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/Pila" component={LinealPC} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  
}

export default App;