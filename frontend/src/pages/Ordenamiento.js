//Pagina para graficar Ordenamientos
import React from 'react';

import Rapido from '../Estructuras/Ordenamientos/Rapido'
import Seleccion from '../Estructuras/Ordenamientos/Seleccion'
import Burbuja from '../Estructuras/Ordenamientos/Burbuja'
import Insercion from '../Estructuras/Ordenamientos/Insercion'

import Funciones from '../Estructuras/Funciones'

import './styles/Grafica.css'

class LinealesL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          tipo: "Burbuja",
          velocidad: 5,
        }
        this.vector = this.setvector(this.state.tipo)
    }

    handleTipo = e => {
        this.setState({ tipo: e.target.value })
    }

    handleVelocidad = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleClick = e => {
        const id = e.target.id
        if(id === "Guardar"){
            var output = this.vector.guardar()
            Funciones(output.nombre, output.text)
        }
        else if(id === "Cargar"){

        }
        else if(id === "Nuevo") this.vector = this.setvector(this.state.tipo)
    }

    setvector = tipo => {
        if(tipo === "Selección") return new Seleccion()
        
        else if(tipo === "Rápido") return new Rapido()

        else if(tipo === "Burbuja") return new Burbuja()

        else if(tipo === "Inserción") return new Insercion()
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
                            <input type="range"  min="0" max="10" step="1" onChange={this.handleVelocidad}
                                defaultValue={this.state.velocidad} width="100"/>
                        </td>
                        <td>
                            <select multiple=""
                                onChange={this.handleTipo}>
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