import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import Layout from './Layout'
//Menus
import Home from '../pages/Menus/mHome'
import NotFound from '../pages/Menus/NotFound'
import Lineal from '../pages/Menus/mLineal'
import Arborea from '../pages/Menus/mArborea'
import NoLineal from '../pages/Menus/mNoLineal'
import Codificacion from '../pages/Menus/mCodificacion'
import Compuesta from '../pages/Menus/mCompuesta'
//Lineales
import Simple from '../pages/lineal/pSimpleEC'
import PilaCola from '../pages/lineal/pPilaCola'
import ColaPrioridad from '../pages/lineal/pColaPrioridad'
import Dobles from '../pages/lineal/pDobleEC'
//Ordenamientos
import Ordenamiento from '../pages/pOrdenamiento'
//Arboreas
import Arboles from '../pages/arborea/pArbol'
import ArbolB from '../pages/arborea/pArbolB'
//No Lineales
import HashC from '../pages/noLineal/pHashC'
import HashA from '../pages/noLineal/pHashA'
//Codificacion
import Hamming from '../pages/cadificacion/pHamming'
import Huffman from '../pages/cadificacion/pHuffman'
import LZW from '../pages/cadificacion/pLZW'
//import Feistel from '../pages/cadificacion/pFeistel'
//Compuesta
import RCMajor from '../pages/compuesta/pRCMayor'

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
            <Route exact path="/TytusDS/frontend/build/NoLineales/HashCerrada" component={HashC} />
            <Route exact path="/TytusDS/frontend/build/NoLineales/HashAbierta" component={HashA} />
            {/*Codificacion*/}
            <Route exact path="/TytusDS/frontend/build/Codificacion/Hamming" component={Hamming} />
            <Route exact path="/TytusDS/frontend/build/Codificacion/Huffman" component={Huffman} />
            <Route exact path="/TytusDS/frontend/build/Codificacion/LZW" component={LZW} />
            <Route exact path="/TytusDS/frontend/build/Codificacion/LZW" component={LZW} />
            {/*Compuestas*/}
            <Route exact path="/TytusDS/frontend/build/Compuestas/RowMajor" component={RCMajor} />
            <Route exact path="/TytusDS/frontend/build/Compuestas/ColMajor" component={RCMajor} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  
}

export default App;