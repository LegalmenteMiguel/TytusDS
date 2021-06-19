//Pagina para graficar Enlazada Simple, Enlazada Doble, Circular Simple y Circular Doble
import React from 'react'

import EnlazadaS from '../Estructuras/lineales/Simple'
//import EnlazadaD from '../Estructuras/lineales/Doble'
//import CircularS from '../Estructuras/lineales/CircularSimple'
import CircularD from '../Estructuras/lineales/CircularDoble'

import './styles/Grafica.css'

class LinealEC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          repeticion: true,
          ingreso: "Final",
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
        this.setState({ repeticion: !this.state.repeticion })
    }

    handleOption = e => {
        this.setState({ ingreso: e.target.value })
    }

    handleMove = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleFiles = e => {

    }
    
    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === "" && id !== "Nuevo" && id !== "Guardar"){
            alert("Ingrese un valor")
        }
        else{
            if(id === "Agregar") this.lista.agregar(this.state.entrada)
            
            else if(id === "Eliminar") this.lista.eliminar(this.state.entrada)
            
            else if(id === "Buscar"){
                var aux = this.lista.buscar(this.state.entrada)
                if(aux) alert("Se encontro el valor")
                else alert("No se encontro el valor")
            }
            else if(id === "Actualizar"){
                if(this.state.nuevo !== '') this.lista.actualizar(this.state.entrada, this.state.nuevo)
                
                else alert("Ingrese el Nuevo valor")
            } 
                
            else if(id === "Nuevo") this.lista = this.setLista(this.state.path)
            
            else if(id === "Guardar"){
                console.log("PASA")
                var output = this.lista.guardar()
                descarga(output.nombre, output.text)
            }
            else if(id === "Cargar"){
                
            }
            document.getElementById("input").reset()
            document.getElementById("nuevo").reset()
            this.setState({
                entrada: "",
                nuevo: ""
            })
        }
    }

    setLista = path => {
        if(path.includes("EnlazadaSimple")){
            return new EnlazadaS(this.state.ingreso, this.state.repeticion)
        }
        else if(path.includes("CircularDoble")){
            return new CircularD(this.state.ingreso, this.state.repeticion)
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
                            <select multiple="" onChange={this.handleOption} >
                                <option>Final</option>
                                <option>Inicio</option>
                                <option>Orden</option>
                            </select>
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

function descarga(nombre, text) {
    var element = document.createElement('a');
    element.setAttribute('href','data:json;charset=utf-8, ' + encodeURIComponent(text));
    element.setAttribute('download', nombre);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

export default LinealEC