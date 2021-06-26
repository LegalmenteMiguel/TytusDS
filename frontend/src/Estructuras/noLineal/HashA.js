class HashAbierto{
    constructor(tamaño, metodo, tipo){
        this.tamaño = tamaño
        this.metodo = metodo
        this.tipo = tipo
        this.vector = llenar(this.tamaño)
    }

    agregar(valor){
        var i = this._metodo(ascii(valor))
        this.vector[i].unshift(valor)
    }

    eliminar(valor){
        var i = this._metodo(ascii(valor))
        for(var j in this.vector[i]){
            if(this.vector[i][j] === valor){
                (this.vector[i]).splice(j,1)
                break
            }
        }
    }

    buscar(valor){
        var i = this._metodo(ascii(valor))
        for(var j in this.vector[i]){
            if(this.vector[i][j] === valor){
                return true
            }
        }
        return false
    }

    actualizar(valor, nuevo){
        if(this.buscar(valor)){
            this.elimina(valor)
            this.agregar(nuevo)
        }
    }

    carga(lista){
        for(var i in lista){
            this.agregar(lista[i])
        }
    }

    guarda(){
        
    }
    dotG(){
        var nodos = []
        var relaciones = []
        nodos = llenarNodos(nodos, this.vector)
        relaciones = llenarRelaciones(relaciones, this.vector)
        
        return { nodes: nodos, edges: relaciones }
    }

    _metodo(valor){
        if(this.metodo === "Simple") return simple(this.tamaño)
        else if(this.metodo === "Division") return division(valor, this.tamaño)
        else if(this.metodo === "Multiplicacion") return multiplicacion(valor, this.tamaño)
    }
}
//Metodos
function simple(tamaño){ return (0.1625277911 * tamaño) }
function division(valor, tamaño){ return (valor % tamaño) }
function multiplicacion(valor, tamaño){ return Math.trunc(tamaño * ((valor * 0.1625277911) % 1)) }

function llenar(m){
    var temp = []
    for(var i = 0; i < m; i++){
        temp[i] = []
    }
    return temp
}

function ascii(txt){
    var sum = 0
    if(/^[+-]?\d+$/.test(txt)) sum = parseInt(txt, 10)
    else {
        for(var i in txt){
            sum += txt[i].charCodeAt(0)
        }
    }
    return sum
}

function llenarNodos(nodos, vector){
    for(var i in vector){
        nodos.push({id: i, label: i.toString(), level:0})
    }
    for(var k in vector){
        for(var j in vector[k]){
            var a = "l" + k.toString() + j.toString()
            nodos.push({id: a, label: vector[k][j].toString(), level: parseInt(j)+1})
        }
    }
    return nodos
}

function llenarRelaciones(relaciones, vector){
    for(var i = 0; i < vector.length-1; i++){
        relaciones.push({from: i, to: parseInt(i)+1})
    }
    for(var i in vector){
        var a = "l" + i.toString() + "0"
        relaciones.push({from: i, to: a})
    }
    for(var k in vector){
        for(var j = 0; j < vector[k].length-1; j++){
            var a = "l" + k.toString() + j.toString()
            var b = "l" + k.toString() + (j+1).toString()
            relaciones.push({from: a, to: b})
        }
    }
    return relaciones
}
export default HashAbierto