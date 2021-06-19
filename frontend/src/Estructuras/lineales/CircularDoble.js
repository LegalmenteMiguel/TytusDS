class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
        this.anterior = null
    }
}

class CircularDoble {
    constructor(ingreso, repeticion){
        this.raiz = null
        this.ingreso = ingreso
        this.repeticion = repeticion
    }

    agregar(valor){
        const nodo = new Nodo(valor)
        if(this.raiz === null){
            this.raiz = nodo
            nodo.siguiente = nodo
            nodo.anterior = nodo
        }
        else{
            if(this.repeticion || !(this.buscar(valor))){
                if(this.ingreso === "Final"){
                    this.agregar_F(nodo)
                }
                else if(this.ingreso === "Inicio"){
                    this.agregar_I(nodo)
                }
                else if(this.ingreso === "Orden"){
                    this.agregar_O(nodo)
                }
            }
            else{
                alert("No se puede ingresar el valor")
            }
        }
    }

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
                        aux = this.raiz.anterior
                        this.raiz = nodo.siguiente
                        nodo.anterior = aux
                    }
                }
                else{
                    aux = nodo.anterior
                    aux.siguiente = nodo.siguiente
                    nodo.siguiente.anterior = aux
                }
                break
            }
            nodo = nodo.siguiente
        }while(nodo !== this.raiz)
    }

    actualizar(valor, nuevo){
        var nodo = this.raiz
        do{
            if(nodo.valor === valor){
                nodo.valor = nuevo
                break
            }
            nodo = nodo.siguiente
        }while(nodo !== this.raiz)
    }

    buscar(valor){
        var nodo = this.raiz
        do{
            if(nodo.valor === valor){
                return true
            }
        }while(nodo !== this.raiz)
        return false
    }

    cargar(){
        
    }

    guardar(){
        const json = {
            categoria: "Circular Doble",
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
        return {nombre: "Circular Doble.json", text: txt}
    }
    //Metodos sin uso fuera
    agregar_F(nodo) {
        var aux = this.raiz.anterior
        aux.siguiente = this.raiz.anterior = nodo
        nodo.anterior = aux
        nodo.siguiente = this.raiz    
    }

    agregar_I(nodo){
        var aux = this.raiz
        this.raiz = nodo
        nodo.siguiente = aux
        nodo.anterior = aux.anterior
        aux.anterior = nodo
    }

    agregar_O(nodo){
        var aux = this.raiz
        var pivote
        do{
            if(nodo.valor <= aux.valor){
                pivote = aux.anterior
                pivote.siguiente = aux.anterior = nodo
                nodo.siguiente = aux
                nodo.anterior = pivote
                if(aux === this.raiz){
                    this.raiz = nodo
                }
                break
            }
            else if(aux === this.raiz.anterior){
                this.raiz.anterior = aux.siguiente = nodo
                nodo.siguiente = this.raiz
                nodo.anterior = aux
            }
            aux = aux.siguiente
        }while(aux !== this.raiz)
    }
}

export default CircularDoble