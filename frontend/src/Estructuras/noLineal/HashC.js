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
            console.log("ENTRA")
            var i = this._metodo(ascii(valor))
            var aux = i
            var j = 1
            while(this.vector[aux] !== valor){
                aux = this._resolucion(i, j)
                j++
            }
            this.vector[aux] = "< >"
            this.contador--
            console.log("SALE")
        }
    }

    buscar(valor){
        for(var i in this.vector){
            for(var j in this.vector[i]){
                if(this.vector[i][j] === valor){
                    return true
                }
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
        /*const json = {
            categoria: "Tabla Hash Cerrada",

        }*/
    }

    cargar(lista){
        for(var i in lista){
            this.agregar(lista[i])
        }
    }

    rehashing(){
        if((this.contador*100)/this.tamaño >= this.max){
            var aux = this.vector
            this.tamaño = (this.contador*100)/this.min
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
            if(l%10 === 1){
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
function simple(tamaño){ return (0.1625277911 * tamaño) }
function division(valor, tamaño){ return (valor % tamaño) }
function multiplicacion(valor, tamaño){ return Math.trunc(tamaño * ((valor * 0.1625277911) % 1)) }

//Resoluciones    
function lineal(valor, tamaño, i){ return ((valor + i) % tamaño) }
function cuadratica(valor, tamaño, i){ return ((valor + (i*i)) % tamaño) }
//function doble(valor, tamaño, i){ return ((valor%tamaño)+i*(valor%(tamaño"< >")))%tamaño }

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