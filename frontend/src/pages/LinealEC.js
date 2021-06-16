import React from 'react'
import ReactFileReader from 'react-file-reader'

import EnlazadaS from '../Estructuras/lineales/Simple'
import CirlarD from '../Estructuras/lineales/CircularDoble'

import './styles/Grafica.css'

class Ordenamiento extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          repeticion: true,
          ingreso: "Final",
          velocidad: 5,
          entrada: '',
          path: this.props.location.pathname,
          carga: '',
        }
        this.lista = this.setLista(this.state.path)
      }
    
    handleChange = e => {
        this.setState({
            entrada: e.target.value
        })
    }

    handleCheck = () => {
        this.setState({
            repeticion: !this.state.repeticion
        })
    }

    handleOption = e => {
        this.setState({
            ingreso: e.target.value
        })
    }
    
    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === '' && id !== "Nuevo" && id !== "Guardar"){
            alert("Ingrese un valor")
        }
        else{
            if(id === "Agregar"){
                this.lista.agregar(this.state.entrada)
            }
            else if(id === "Eliminar"){
                this.lista.eliminar(this.state.entrada)
            }
            else if(id === "Buscar"){
                var aux = this.lista.buscar(this.state.entrada)
                if(aux){
                    alert("Se encontro el valor")
                }
                else{
                    alert("No se encontro el valor")
                }
            }
            else if(id === "Nuevo"){
                this.lista = this.setLista(this.state.path)
            }
            else{
                console.log(this.lista)
            }
            document.getElementById("input").reset()
            this.setState({
                entrada: ''
            })
        }
    }
    
    handleMove = e => {
        console.log(e.target.value)
        this.setState({
            velocidad: e.target.value
        })
    }

    handleFiles = f => {
        var txt = new FileReader();
        txt.onload = function(e) {
            this.setState({
                carga: JSON.parse(txt.result)
            })
            console.log(this.state.carga)
            console.log(this.state.carga.repeticion)
        }
        txt.readAsText(f[0]);
    }

    setLista = path => {
        if(path.includes("EnlazadaSimple")){
            const list = new EnlazadaS(this.state.ingreso, this.state.repeticion)
            return list
        }
        else if(path.includes("CircularDoble")){
            const list = new CirlarD(this.state.ingreso, this.state.repeticion)
            return list
        }
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <p>{this.nombre}</p>
                        </td>
                        <td>
                            <form id="input">
                                <input type="text" style={{width: "100px"}} 
                                onChange={this.handleChange}/>
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
                            <button className="btn Boton" id="Guardar"
                                onClick={this.handleClick}> Guardar
                            </button>
                        </td>
                        <td>
                            <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.JSON'}>
                                <button className="btn Boton" id="Cargar"
                                    > Cargar
                                </button>
                            </ReactFileReader>
                        </td>
                    </table>
                </nav>
                <div>
                    <canvas width="1000" height="700"></canvas>
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1"  onChange={this.handleMove}
                            defaultValue={this.state.velocidad} width="100"/>
                        </td>
                        <td>
                            <select multiple="" class="form-select" 
                                onChange={this.handleOption} >
                                <option>Final</option>
                                <option>Inicio</option>
                                <option>Orden</option>
                            </select>
                        </td>
                        <td>
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" onChange={this.handleCheck}
                                    defaultChecked={this.state.repeticion}/>
                                Repeticiones
                            </label>
                        </td>
                        <td>
                            <button className="btn btn-secondary" id="Nuevo"
                                onClick={this.handleClick}> Nuevo
                            </button>
                        </td>
                    </table>
                </nav>
            </div>
        )
    }

}

export default Ordenamiento