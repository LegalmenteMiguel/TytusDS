//Pagina para graficar Hash Cerrado
import React from 'react'

import HashC from '../../Estructuras/noLineal/HashC'

import Funciones from '../../Estructuras/Funciones.js'

import hash from '../../animaciones/noLineal/gHashC'

import '../styles/Grafica.css'

class pHashC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            entrada: "",
            nuevo: "",
            tamaño: 29,
            minimo: 20,
            maximo: 80,
            metodo: "Division",
            resolucion: "Lineal",
            tipo: "Integer",
            velocidad: 5
        }
        this.hash = new HashC(this.state.tamaño, this.state.min, this.state.maximo, this.state.metodo, this.state.resolucion, this.state.tipo)
      }
    
    handleEntrada = e => {
        this.setState({ entrada: e.target.value })
    }

    handleNuevo = e => {
        this.setState({ nuevo: e.target.value })
    }

    handleVelocidad = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleTamaño = e => {
        this.setState({ tamaño: parseInt(e.target.value)})
    }

    handleMinimo = e => {
        this.setState({ minimo: parseInt(e.target.value)})
    }

    handleMaximo = e => {
        this.setState({ maximo: parseInt(e.target.value)})
    }

    handleTipo = e => {
        this.setState({ tipo: e.target.value })
    }

    handleMetodo = e => {
        this.setState({ metodo: e.target.value })
    }

    handleResolucion = e => {
        this.setState({ resolucion: e.target.value })
    }

    handleFiles = e => {
        let files = e.target.files
        let reader = new FileReader()
        reader.onload = e =>{
            
        }
        reader.readAsText(files[0])
    }

    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === "" && id !== "Nuevo" && id !== "Guardar") alert("Ingrese un valor")

        else{
            if(id === "Agregar") this.hash.agregar(this.state.entrada)
            
            else if(id === "Eliminar") this.hash.eliminar(this.state.entrada)
            
            else if(id === "Buscar"){
                var aux = this.hash.buscar(this.state.entrada)
                if(aux) alert("Se encontro el valor")
                else alert("No se encontro el valor")
            }
            else if(id === "Actualizar"){
                if(this.state.nuevo === "") alert("Ingrese el Nuevo valor")
                
                else this.hash.actualizar(this.state.entrada, this.state.nuevo)
            } 
                
            else if(id === "Nuevo") this.hash = new HashC(this.state.tamaño, this.state.min, this.state.maximo, this.state.metodo, this.state.resolucion, this.state.tipo)

            else if(id === "Guardar"){
                var output = this.hash.guardar(this.state.tipo)
                Funciones(output.nombre, output.text)
            }

            document.getElementById("input").reset()
            document.getElementById("nuevo").reset()
            this.setState({
                entrada: "",
                nuevo: ""
            })
        }
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <form id="input">
                                <input type="text" style={{width: "100px"}} placeholder="Valor"
                                onChange={this.handleEntrada}/>
                            </form>
                        </td>
                        <td>
                            <button className="btn Boton" id="Agregar" 
                                onClick={this.handleClick}> Agregar
                            </button> 
                        </td>
                        <td>
                            <button className="btn Boton" id="Eliminar"
                                onClick={this.handleClick}> Eliminar
                            </button>
                        </td>
                        <td>
                            <button className="btn Boton" id="Buscar"
                                onClick={this.handleClick}> Buscar
                            </button>
                        </td>
                        <td>
                            <form id="nuevo">
                                <input type="txt" style={{width: "100px"}} placeholder="Nuevo Valor"
                                onChange={this.handleNuevo}/>
                            </form>
                        </td>
                        <td>
                            <button className="btn Boton" id="Actualizar"
                                onClick={this.handleClick}> Actualizar
                            </button>
                        </td>
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
                    {hash(this.hash.dotG())}
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1"  onChange={this.handleVelocidad}
                            defaultValue={this.state.velocidad} width="100"/>
                        </td>
                        <td>
                            <form id="input">
                                <input type="number" min="2" style={{width: "55px"}} placeholder="Tam"
                                onChange={this.handleMinimo}/>
                            </form>
                        </td>
                        <td>
                            <form id="input">
                                <input type="number" min="1" style={{width: "55px"}} placeholder="Min"
                                onChange={this.handleMaximo}/>
                            </form>
                        </td>
                        <td>
                            <form id="input">
                                <input type="number" min="2" style={{width: "55px"}} placeholder="Max"
                                onChange={this.handleTamaño}/>
                            </form>
                        </td>
                        <td>
                            <select multiple="" onChange={this.handleMetodo} style={{height: "30px"}} >
                                <option>Simple</option>
                                <option>Division</option>
                                <option>Multiplicacion</option>
                            </select>
                        </td>
                        <td>
                            <select multiple="" onChange={this.handleResolucion} style={{height: "30px"}} >
                                <option>Lineal</option>
                                <option>Cuadratica</option>
                                <option>Doble</option>
                            </select>
                        </td>
                        <td>
                            <select multiple="" onChange={this.handleTipo} style={{height: "30px"}} >
                                <option>Integer</option>
                                <option>String</option>
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

export default pHashC