class HashCerrado{
    constructor(tamaño, min, max, metodo, resolucion, tipo){
        this.tamaño = tamaño
        this.contador = 0
        this.metodo = metodo
        this.resolucion = resolucion
        this.min = min
        this.max = max
        this.vector = llenar(this.tamaño)
        this.tipo = tipo
        this.hashings = 0
    }

    agregar(valor){
        var i = this._metodo(ascii(valor))
        var aux = i
        var j = 1
        while(this.vector[aux] !== "< >"){
            aux = this._resolucion(i, j)
            j++
        }
        this.vector[aux] = valor
        this.contador++
        this.rehashing()
    }

    eliminar(valor){
        if(this.buscar(valor)){
            var i = this._metodo(ascii(valor))
            var aux = i
            var j = 1
            while(this.vector[aux] !== valor){
                aux = this._resolucion(i, j)
                j++
            }
            this.vector[aux] = "< >"
            this.contador--
        }
    }

    buscar(valor){
        for(var i in this.vector){
            if(this.vector[i] === valor){
                return true
            }
            
        }   
        return false     
    }

    actualizar(valor, nuevo){
        if(this.buscar(valor)){
            this.eliminar(valor)
            this.agregar(nuevo)
        }
    }

    guardar(){
        var aux = []
        for(var i in this.vector){
            if(this.vector[i] === "< >"){
                aux.push({indice: i, valor: ""})
            }
            else{
                aux.push({indice: i, valor: this.vector[i]})
            }
        }
        const json = {
            categoria: "Hash Cerrado",
            tamaño: this.tamaño,
            minimo: this.min,
            maximo: this.max,
            rehashings: this.hashings,
            funcion: this.metodo,
            prueba: this.resolucion,
            tipo: this.tipo,
            valores: aux
        }
        const txt = JSON.stringify(json, null, '   ')
        return {nombre: "Hash Cerrado.json", text: txt}
    }

    cargar(lista){
        for(var i in lista){
            
            this.agregar(lista[i])
        }
    }

    rehashing(){
        if((this.contador*100)/this.tamaño >= this.max){
            this.hashings++
            var aux = this.vector
            this.tamaño = Math.round((this.contador*100)/this.min)
            this.contador = 0
            this.vector = llenar(this.tamaño)
            for(var i in aux){
                if(aux[i] !== "< >"){
                    this.agregar(aux[i])
                }
            }
        }
    }

    _metodo(valor){
        if(this.metodo === "Simple") return simple(this.tamaño)
        else if(this.metodo === "Division") return division(valor, this.tamaño)
        else if(this.metodo === "Multiplicacion") return multiplicacion(valor, this.tamaño)
    }

    _resolucion(valor, i){
        if(this.resolucion === "Lineal") return lineal(valor, this.tamaño, i)
        else if(this.resolucion === "Cuadratica") return cuadratica(valor, this.tamaño, i)
        else if(this.resolucion === "Doble") return //doble(valor, this.tamaño, i)
    }

    dotG(){
        var nodos = []
        var relaciones = []
        var l = 1
        var aux = 0
        for(var i in this.vector){
            if(l%15 === 1){
                l = 1
                aux++
            }
            nodos.push({id: i, label: (this.vector[i].toString()+"\n" + i), x: parseInt(l)*150, y: parseInt(aux)*100})
            l++
        }

        return { nodes: nodos, edges: relaciones }
    }
}

function llenar(m){
    var aux = new Array(m)
    for(var i = 0; i < m; i++){
        aux[i] = "< >"
    }
    return aux
}
//Metodos
function simple(tamaño){ return Math.trunc(0.1625277911 * tamaño) }
function division(valor, tamaño){ return (valor % tamaño) }
function multiplicacion(valor, tamaño){ return Math.trunc(tamaño * ((valor * 0.1625277911) % 1)) }

//Resoluciones    
function lineal(valor, tamaño, i){ return ((valor + i) % tamaño) }
function cuadratica(valor, tamaño, i){ return ((valor + (i*i)) % tamaño) }
function doble(valor, tamaño, i){ return (division(valor, tamaño) + i*h2(valor, tamaño)) }

function h2(valor, tamaño){ return ( valor - (tamaño % valor)) }

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

export default HashCerrado