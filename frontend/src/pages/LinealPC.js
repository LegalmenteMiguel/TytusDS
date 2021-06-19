//Pagina para graficar Pila y Cola
import React from 'react';

import Pila from '../Estructuras/lineales/Pila'
//import Cola from '../Estructuras/lineales/Cola'

import './styles/Grafica.css'

class LinealPC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          repeticion: true,
          velocidad: 5,
          entrada: "",
          nuevo: "",
          path: this.props.location.pathname,
        }
        this.lista = this.setLista(this.state.path)
      }
    
    handleEntrada = e => {
        this.setState({ entrada: e.target.value })
    }

    handleNuevo = e => {
        this.setState({ nuevo: e.target.value })
    }

    handleCheck = () => {
        this.setState({ repeticion: !this.state.repeticion  })
    }
    
    handleMove = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === "" && id !== "Nuevo" && id !== "Guardar"){
            alert("Ingrese un valor")
        }
        else{
            if(id === "Agregar") this.lista.agregar(this.entrada)
            
            else if(id === "Eliminar") this.lista.eliminar(this.entrada)
            
        
            else if(id === "Buscar"){
                var aux = this.lista.buscar(this.state.entrada)
                if(aux) alert("Se encontro el valor")
                
                else alert("No se encontro el valor")
            }
            else if(id === "Actualizar") this.lista.actualizar(this.state.entrada, this.state.nuevo)
            
            else if(id === "Guardar") console.log(this.lista)
    
            else if(id === "Nuevo") this.lista = this.setLista(this.state.path)

            document.getElementById("input").reset()
            document.getElementById("nuevo").reset()
            this.setState({
                entrada: "",
                nuevo: ""
            })
        }
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
                    {/*Aqui va la grafica*/}
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1"  onChange={this.handleMove}
                            defaultValue={this.state.velocidad} width="100"/>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" onChange={this.handleCheck}
                                    defaultChecked={this.state.repeticion}/>
                                Repeticiones
                            </label>
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

export default LinealPC