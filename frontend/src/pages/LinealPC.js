import React from 'react';

import Pila from '../Estructuras/lineales/Pila'

import './styles/Grafica.css'

class LinealPC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          repeticion: true,
          velocidad: 5,
          entrada: '',
          path: this.props.location.pathname,
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
    
    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === '' && id !== "Nuevo" && id !== "Guardar"){
            alert("Ingrese un valor")
        }
        else{
            if(id === "Agregar"){
                this.lista.agregar(this.entrada)
            }
            else if(id === "Eliminar"){
                this.lista.eliminar(this.entrada)
            }
            else if(id === "Nuevo"){
                this.lista = this.setLista(this.state.path)
            }
            else if(id === "Buscar"){
                var aux = this.lista.buscar(this.state.entrada)
                if(aux){
                    alert("Se encontro el valor")
                }else{
                    alert("No se encontro el valor")
                }
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

    setLista = path => {
        if(path.includes("Pila")){
            const list = new Pila(this.state.repeticion)
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
                            <button className="btn Boton" id="Cargar"
                                onClick={this.handleClick}> Cargar
                            </button>
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

export default LinealPC