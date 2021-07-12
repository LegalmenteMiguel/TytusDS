//Pagina para graficar Enlazadas Simples y Enlazada Doble
import React from 'react';

import EnlazadaS from '../../Estructuras/lineal/Simple'
import EnlazadaD from '../../Estructuras/lineal/Doble'

import Funciones from '../../Estructuras/Funciones.js'

import enlazadas from '../../animaciones/lineal/gEnlazada'

import '../styles/Grafica.css'


class pEnlazadas extends React.Component {
    constructor(props) {
        super(props)
        this.reader = new FileReader()
        this.path = this.props.location.pathname

        this.state = {
            entrada: '',
            nuevo: '',
            repeticion: true,
            ingreso: "Final",
            velocidad: '5'
        }

        this.lista = this.setLista()
      }
    
    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleCheck = e => {
        this.setState({ repeticion: !this.state.repeticion })
    }

    handleFiles = e => {
        let files = e.target.files
        this.reader.onload = e =>{
            const json = JSON.parse(e.target.result)

            this.setState({ 
                velocidad: json.animacion,
                repeticion: json.repeticion,
                ingreso: json.posicion 
            })

            this.lista = this.setLista()
            this.lista.cargar(json.valores)
            setTimeout(() => {
                this.setState({})
            }, parseInt(this.state.velocidad)*500);
            }

        this.reader.readAsText(files[0])
    }

    handleClick = e => {
        const id = e.target.id
        if(id === "Agregar") this.lista.agregar(this.state.entrada)

        else if(id === "Eliminar") this.lista.eliminar(this.state.entrada)
        
        else if(id === "Buscar"){
            var aux = this.lista.buscar(this.state.entrada)
            if(aux) alert("Se encontro el valor")
            else alert("No se encontro el valor")
        }

        else if(id === "Actualizar") this.lista.actualizar(this.state.entrada, this.state.nuevo)
            
        else if(id === "Nuevo") this.lista = this.setLista()
        
        else if(id === "Guardar"){
            var output = this.lista.guardar()
            Funciones(output.nombre, output.text)
        }
            
        document.getElementById("input").reset()
        document.getElementById("new").reset()
        setTimeout(() => {
            this.setState({})
        }, parseInt(this.state.velocidad)*500);
        
    }

    setLista = () => {
        if(this.path.includes("EnlazadaSimple")) return new EnlazadaS(this.state.ingreso, this.state.repeticion)
        
        else if(this.path.includes("EnlazadaDoble")) return new EnlazadaD(this.state.ingreso, this.state.repeticion)
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <form id="input">
                                <input type="text" style={{width: "100px"}} placeholder="Valor"
                                id="entrada" onChange={this.handleChange}/>
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
                            <form id="new">
                                <input type="txt" style={{width: "100px"}} placeholder="Nuevo Valor"
                                id="nuevo" onChange={this.handleChange}/>
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
                    {enlazadas(this.lista.dotG(0))}
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1" 
                            defaultValue={this.state.velocidad} width="100"
                            id="velocidad" onChange={this.handleChange}/>
                        </td>
                        <td>
                            <select id="ingreso" onChange={this.handleChange}
                            defaultValue={this.state.ingreso}>
                                <option>Final</option>
                                <option>Inicio</option>
                                <option>Orden</option>
                            </select>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="repeticion" onChange={this.handleCheck}
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

export default pEnlazadas