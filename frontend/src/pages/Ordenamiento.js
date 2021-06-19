import React from 'react';

import Rapido from '../Estructuras/Ordenamientos/Rapido'
import Seleccion from '../Estructuras/Ordenamientos/Seleccion'
//import Burbuja from '../Estructuras/Ordenamientos/Burbuja'
//import Insercion from '../Estructuras/Ordenamientos/Insercion'

import './styles/Grafica.css'

class LinealesL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          tipo: "Burbuja",
          velocidad: 5,
        }
        this.lista = this.setLista(this.state.tipo)
    }

    handleOption = e => {
        this.setState({ tipo: e.target.value })
    }

    handleMove = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleFiles = e => {
    }

    handleClick = e => {
        const id = e.target.id
        if(id === "Guardar"){

        }
        else if(id === "Cargar"){

        }
        else if(id === "Nuevo") this.lista = this.setLista(this.state.tipo)
    }

    setLista = tipo => {
        if(tipo === "Selección") return new Seleccion()
        
        else if(tipo === "Rápido") return new Rapido()
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <button className="btn btn-success" id="Guardar"
                                onClick={this.handleClick}> Guardar
                            </button>
                        </td>
                        <td>
                            <input type="file" multiple={false} accept=".json" 
                                onChange={this.handleFiles} />
                        </td>
                    </table>
                </nav>
                <div>
                    {/*Aqui va la grafica*/}
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1" onChange={this.handleMove}
                                defaultValue={this.state.velocidad} width="100"/>
                        </td>
                        <td>
                            <select multiple=""
                                onChange={this.handleOption}>
                                <option>Burbuja</option>
                                <option>Selección</option>
                                <option>Inserción</option>
                                <option>Rápido</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-danger" id="Nuevo"
                                onClick={this.handleClick}> Nuevo
                            </button>
                        </td>
                    </table>
                </nav>
            </div>
        )
    }

}

export default LinealesL