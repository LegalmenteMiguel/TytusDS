//Pagina para graficar Hamming
import React from 'react'

import Hamming from '../../Estructuras/codificacion/Hamming'

import Funciones from '../../Estructuras/Funciones.js'

import '../styles/Grafica.css'

class pHamming extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            entrada: "",
            salida: "",
            velocidad: 5
        }
        this.Hamming= new Hamming()
      }
    
    handleEntrada = e => {
        this.setState({ entrada: e.target.value })
    }

    handleVelocidad = e => {
        this.setState({ velocidad: e.target.value })
    }

    handleFiles = e => {
        let files = e.target.files
        let reader = new FileReader()
        reader.onload = e =>{
            var aux = e.target.result
            aux = aux.substring(0, aux.length-1)
            this.setState({ entrada: aux })
            document.getElementById("Entrada").value = (e.target.result).toString()
        }
        reader.readAsText(files[0])
    }

    handleClick = e => {
        const id = e.target.id
        if(this.state.entrada === "" && id === "Calcular") alert("Ingrese una frase")

        else{
            if(id === "Calcular"){ 
                var salida = this.Hamming.calcular(this.state.entrada)
                this.setState({ salida: salida })
                document.getElementById("Resultado").value = salida
            }
            
            else if(id === "Guardar"){
                var output = this.hash.guardar(this.state.tipo)
                Funciones(output.nombre, output.text)
            }
        }
    }

    render(){
        return (
            <div>
                <nav className="Bar">
                    <table>
                        <td>
                            <form id="input">
                                <input type="text" style={{width: "300px"}} placeholder="Entrada" id="Entrada"
                                onChange={this.handleEntrada}/>
                            </form>
                        </td>
                        <td>
                            <button className="btn Boton" id="Calcular" 
                                onClick={this.handleClick}> Calcular
                            </button> 
                        </td>
                        <td>
                            <form id="output">
                                <input type="text" style={{width: "300px"}} placeholder="Resultado" id="Resultado"
                                readonly="readonly" />
                            </form>
                        </td>
                        <td>
                            <button className="btn btn-success" id="Guardar"
                                onClick={this.handleClick}> Guardar
                            </button>
                        </td>
                        <td>
                            <input type="file" multiple={false} accept=".txt"
                            onChange={this.handleFiles} />
                        </td>
                    </table>
                </nav>
                <div>
                    {/*Aqui iria la grafica*/}
                </div>
                <nav className="Sub_bar">
                    <table>
                        <td>
                            <input type="range"  min="0" max="10" step="1"  onChange={this.handleVelocidad}
                            defaultValue={this.state.velocidad} width="100"/>
                        </td>
                    </table>
                </nav>
            </div>
        )
    }
}

export default pHamming