import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Layout from './Layout'
//Home
import Home from '../pages/Home'
//Paginas
import Lineal from '../pages/Lineal'
import Ordenamiento from '../pages/Ordenamiento'
import Arborea from '../pages/Arborea'
import NotFound from '../pages/NotFound'
import LinealEC from '../pages/LinealEC'
import LinealPC from '../pages/LinealPC'
import LinealCP from '../pages/LinealCP'
import ArbolB from '../pages/ArbolB'

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
            <Route exact path="/TytusDS/frontend/build/Lineales/EnlazadaDoble" component={LinealEC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/CircularSimple" component={LinealEC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/CircularDoble" component={LinealEC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/Pila" component={LinealPC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/Cola" component={LinealPC} />
            <Route exact path="/TytusDS/frontend/build/Lineales/ColaPrioridad" component={LinealCP} />
            <Route exact path="/TytusDS/frontend/build/Arboreas/ArbolB" component={ArbolB} />
            <Route exact path="/TytusDS/frontend/build/Arboreas/ArbolB+" component={ArbolB} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  
}

export default App;