import React from 'react'
import ReactFileReader from 'react-file-reader'

import EnlazadaS from '../Estructuras/lineales/Simple'
import CirlarD from '../Estructuras/lineales/CircularDoble'

import './styles/Grafica.css'

var cont = ""

class LinealEC extends React.Component {
    constructor(props) {
        super(props)
        //this.handleSubmit = this.handleSubmit.bind(this)
        this.fileInput = React.createRef()
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
                console.log(this.lista.primero)
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
                console.log(this.state.path)
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

    handleFiles = evt => {
        const va = getFile(evt)
        console.log(va)
        //this.lista.cargar(cont)
    }

    cargar = txt => {
        this.lista.cargar(txt)
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
                            <input type="file" multiple={false} accept=".json" id="myfile" onChange={this.handleFiles} />
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

async function getFile(evt){
    let fileInputControl = evt.target
    let files = fileInputControl.files[0]
    let co
    var myFile = new MyFileReader()
    const promise = await myFile.readAsTextAsync(files)
    
    return promise
}

function MyFileReader() { }

MyFileReader.prototype.readAsTextAsync = function(file){
    return new Promise( (resolve, reject) => {
        try{
            var reader = new FileReader()
            reader.onload = function(evt) {
                const cont = evt.target.result
                resolve(cont)
            }
            reader.readAsText(file)
        }catch(error){
            reject(error)
        }
    })
}

export default LinealEC