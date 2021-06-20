class Nodo {
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
    }
}
class CircularSimple{
    constructor(ingreso, repeticion){
        this.raiz = null;
        this.ingreso = ingreso
        this.repeticion = repeticion
    }
    
    agregar(valor){
        const nodo = new Nodo(valor);
        if(this.raiz == null){
            this.raiz = nodo
            this.raiz.siguiente = nodo
        }
        else{
            if(this.repeticion || !(this.buscar(valor))){
                if(this.ingreso === "Final" || this.ingreso === "Fin"){
                    this.nuevoUltimo(nodo)
                }
                else if(this.ingreso === "Inicio"){
                    this.nuevoPrimero(nodo)
                }
                else if(this.ingreso === "Orden" || this.ingreso === "Ordenado"){
                    this.nuevoOrdenado(nodo)
                }
            }
            else{
                alert("No se puede ingresar el valor")
            }
        }
    }
    //Agrega al principio
    nuevoPrimero(nodo){
        var aux = this.raiz
        do{
            if(aux.siguiente === this.raiz){
                if(aux === this.raiz){
                    this.raiz = aux.siguiente = nodo
                    nodo.siguiente = aux
                }
                else{
                    var temp = this.raiz
                    this.raiz = aux.siguiente = nodo
                    nodo.siguiente = temp
                }
                break
            }
            aux = aux.siguiente
        }while(aux !== this.raiz)
    }
    //Agregar al final
    nuevoUltimo(nodo){
        var aux = this.raiz
        do{
            if(aux.siguiente === this.raiz){
                if(aux === this.raiz){
                    this.raiz.siguiente = nodo
                    nodo.siguiente = this.raiz
                }
                else{
                    aux.siguiente = nodo
                    nodo.siguiente = this.raiz
                }
                break
            }
            aux = aux.siguiente
        }while(aux !== this.raiz)
    }
    //Agregar ordenado   
    nuevoOrdenado(nodo){ 
        var aux = this.raiz
        var temp = null
        do{
            console.log(aux)
            if(ascii(nodo.valor) <= ascii(aux.valor)){
                if(aux === this.raiz){
                    temp = this.getUltimo()
                    this.raiz = temp.siguiente = nodo
                    nodo.siguiente = aux
                    
                }
                else{
                    temp.siguiente = nodo
                    nodo.siguiente = aux
                }
                break
            }
            else if(aux.siguiente === this.raiz){
                aux.siguiente = nodo
                nodo.siguiente = this.raiz
                break
            }
            temp = aux
            aux = aux.siguiente
        }while(aux !== this.raiz)
    }
    //eliminar
    eliminar(valor){
        var nodo = this.raiz
        var aux = null
        do{
            if(nodo.valor === valor){
                if(nodo === this.raiz){
                    if(this.raiz.siguiente === this.raiz){
                        this.raiz = null
                    }
                    else{
                        aux = this.getUltimo()
                        this.raiz = aux.siguiente = nodo.siguiente
                    }
                }
                else{
                    aux.siguiente = nodo.siguiente
                }
                break
            }
            aux = nodo
            nodo = nodo.siguiente
        }while(nodo !== this.raiz)
    }
    //Actualizar
    actualizar(valor, nuevo){
        if(this.repeticion || !(this.buscar(nuevo))){
            var nodo = this.raiz
            do{
                if(nodo.valor === valor){
                    nodo.valor = nuevo
                    break
                }
                nodo = nodo.siguiente
            }while(nodo !== this.raiz)
        }
        else alert("El Nuevo Valor ya existe")
    }
    //Buscar
    buscar(valor){
        if(this.raiz === null){
            var nodo = this.raiz
            do{
                if(nodo.valor === valor){
                    return true
                }
            }while(nodo !== this.raiz)
        }
        return false
    }
    //Cargar JSON
    cargar(vec){
        for(var i in vec){
            this.agregar(vec[i])
        }
    }
    //Guardar JSON
    guardar(){
        const json = {
            categoria: "Circular Simple",
            posicion: this.ingreso,
            repeticion: this.repeticion,
            valores: []
        }
        var nodo = this.raiz
        do{
            json.valores.push(nodo.valor)
            nodo = nodo.siguiente
        }while(nodo !== this.raiz)
        const txt = JSON.stringify(json, null, '   ');
        return {nombre: "Circular Simple.json", text: txt}
    }

    getUltimo(){
        var aux = this.raiz
        do{
            if(aux.siguiente === this.raiz){
                break
            }
            aux = aux.siguiente
        }while(aux !== this.siguiente)
        return aux
    }
}
//Obtner Ascii
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

export default CircularSimple