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
import Enlazadas from '../pages/lineal/pEnlazadas'
import PilaCola from '../pages/lineal/pPilaCola'
import ColaPrioridad from '../pages/lineal/pColaPrioridad'
import Circulares from '../pages/lineal/pCirculares'
//Ordenamientos
import Ordenamiento from '../pages/pOrdenamiento'
//Arboreas
import Arboles from '../pages/arborea/pArbol'
import ArbolB from '../pages/arborea/pArbolB'
//No Lineales
import HashC from '../pages/noLineal/pHashC'
import HashA from '../pages/noLineal/pHashA'
import grafoB from '../pages/noLineal/pGrafosB'
//Codificacion
import Hamming from '../pages/cadificacion/pHamming'
import Huffman from '../pages/cadificacion/pHuffman'
import LZW from '../pages/cadificacion/pLZW'
import Feistel from '../pages/cadificacion/pFeistel'
//import Feistel from '../pages/cadificacion/pFeistel'
//Compuesta
import RCMajor from '../pages/compuesta/pRCMayor'
import mDispersa from '../pages/compuesta/pMatrizD'
import Construccion from '../pages/compuesta/pConstruccion'

function  App(){
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {/*Menus*/}
            <Route exact path="/TytusDS/" component={Home} />
            <Route exact path="/TytusDS/Lineales" component={Lineal} />
            <Route exact path="/TytusDS/Arboreas" component={Arborea} />
            <Route exact path="/TytusDS/NoLineales" component={NoLineal} />
            <Route exact path="/TytusDS/Codificacion" component={Codificacion} />
            <Route exact path="/TytusDS/Compuestas" component={Compuesta} />
            {/*Lineales*/}
            <Route exact path="/TytusDS/Lineales/EnlazadaSimple" component={Enlazadas} />
            <Route exact path="/TytusDS/Lineales/EnlazadaDoble" component={Enlazadas} />
            <Route exact path="/TytusDS/Lineales/CircularSimple" component={Circulares} />
            <Route exact path="/TytusDS/Lineales/CircularDoble" component={Circulares} />
            <Route exact path="/TytusDS/Lineales/Pila" component={PilaCola} />
            <Route exact path="/TytusDS/Lineales/Cola" component={PilaCola} />
            <Route exact path="/TytusDS/Lineales/ColaPrioridad" component={ColaPrioridad} />
            {/*Ordenamientos*/}
            <Route exact path="/TytusDS/Ordenamientos" component={Ordenamiento} />
            {/*Arboreas*/}
            <Route exact path="/TytusDS/Arboreas/ArbolBinario" component={Arboles} />
            <Route exact path="/TytusDS/Arboreas/AVL" component={Arboles} />
            <Route exact path="/TytusDS/Arboreas/ArbolB" component={ArbolB} />
            <Route exact path="/TytusDS/Arboreas/ArbolB+" component={ArbolB} />
            {/*No Lineales*/}
            <Route exact path="/TytusDS/NoLineales/HashCerrada" component={HashC} />
            <Route exact path="/TytusDS/NoLineales/HashAbierta" component={HashA} />
            <Route exact path="/TytusDS/NoLineales/AnchuraDeGrafos" component={grafoB} />
            <Route exact path="/TytusDS/NoLineales/ProfundidadDeGrafos" component={grafoB} />
            <Route exact path="/TytusDS/NoLineales/CostoUniforme" component={grafoB} />
            <Route exact path="/TytusDS/NoLineales/RecubrimientoMinimo" component={grafoB} />
            {/*Codificacion*/}
            <Route exact path="/TytusDS/Codificacion/Hamming" component={Hamming} />
            <Route exact path="/TytusDS/Codificacion/Huffman" component={Huffman} />
            <Route exact path="/TytusDS/Codificacion/LZW" component={LZW} />
            <Route exact path="/TytusDS/Codificacion/Feistel" component={Feistel} />
            {/*Compuestas*/}
            <Route exact path="/TytusDS/Compuestas/RowMajor" component={RCMajor} />
            <Route exact path="/TytusDS/Compuestas/ColMajor" component={RCMajor} />
            <Route exact path="/TytusDS/Compuestas/MatrizDispersa" component={mDispersa} />
            <Route exact path="/TytusDS/Compuestas/Construccion" component={Construccion} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  
}

export default App;