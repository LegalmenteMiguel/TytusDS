import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Layout from './Layout'
//Menus
import Home from '../pages/Menus/Home'
import NotFound from '../pages/Menus/NotFound'
import Lineal from '../pages/Menus/Lineal'
import Arborea from '../pages/Menus/Arborea'
import NoLineal from '../pages/Menus/NoLineal'
import Codificacion from '../pages/Menus/Codificacion'
import Compuesta from '../pages/Menus/Compuesta'
//Lineales
import Simple from '../pages/Simples'
import PilaCola from '../pages/PilaCola'
import ColaPrioridad from '../pages/ColaPrioridad'
import Dobles from '../pages/Dobles'
//Ordenamientos
import Ordenamiento from '../pages/Ordenamiento'
//Arboreas
import Arboles from '../pages/Arboles'
import ArbolB from '../pages/ArbolB'

function  App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {/*Menus*/}
            <Route exact path="/TytusDS/frontend/build/" component={Home} />
            <Route exact path="/TytusDS/frontend/build/Lineales" component={Lineal} />
            <Route exact path="/TytusDS/frontend/build/Arboreas" component={Arborea} />
            <Route exact path="/TytusDS/frontend/build/NoLineales" component={NoLineal} />
            <Route exact path="/TytusDS/frontend/build/Codificacion" component={Codificacion} />
            <Route exact path="/TytusDS/frontend/build/Compuestas" component={Compuesta} />
            {/*Lineales*/}
            <Route exact path="/TytusDS/frontend/build/Lineales/EnlazadaSimple" component={Simple} />
            <Route exact path="/TytusDS/frontend/build/Lineales/EnlazadaDoble" component={Dobles} />
            <Route exact path="/TytusDS/frontend/build/Lineales/CircularSimple" component={Simple} />
            <Route exact path="/TytusDS/frontend/build/Lineales/CircularDoble" component={Dobles} />
            <Route exact path="/TytusDS/frontend/build/Lineales/Pila" component={PilaCola} />
            <Route exact path="/TytusDS/frontend/build/Lineales/Cola" component={PilaCola} />
            <Route exact path="/TytusDS/frontend/build/Lineales/ColaPrioridad" component={ColaPrioridad} />
            {/*Ordenamientos*/}
            <Route exact path="/TytusDS/frontend/build/Ordenamientos" component={Ordenamiento} />
            {/*Arboreas*/}
            <Route exact path="/TytusDS/frontend/build/Arboreas/ArbolBinario" component={Arboles} />
            <Route exact path="/TytusDS/frontend/build/Arboreas/AVL" component={Arboles} />
            <Route exact path="/TytusDS/frontend/build/Arboreas/ArbolB" component={ArbolB} />
            <Route exact path="/TytusDS/frontend/build/Arboreas/ArbolB+" component={ArbolB} />
            {/*No Lineales*/}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  
}

export default App;