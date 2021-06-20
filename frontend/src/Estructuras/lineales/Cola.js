class Nodo {
    constructor(valor){
        this.valor = valor
        this.siguiente = null
    }
}

class Cola{
    constructor(repeticion){
        this.primero = null
        this.ultimo = null
        this.repeticion = repeticion
    }
    // Agrega item
    agregar(valor){
        const nodo = new Nodo(valor)
        if(this.primero === null){
            this.primero = this.ultimo = nodo
        }
        else{
            if(this.repeticion || !(this.buscar(valor))){
               	var aux = this.ultimo
				this.ultimo = nodo
				aux.siguiente = nodo
            }
            else{
                alert("No se puede ingresar el valor")
            }
        }
    }
    // Elimina item
    eliminar(){
        if(this.ultimo != null){
            if(this.primero === this.ultimo){
                this.primero = this.ultimo = null
            }
            else{
                var nodo = this.primero.siguiente
                this.primero = nodo
            }
        }
    }
    // Busca valor
    buscar(valor){
        if(this.primero === null){
            var aux = this.primero
            while(aux != null){
                if(aux.valor === valor){
                    //Se encotro valor
                    return true
                }
                aux = aux.siguiente
            }
        }
        //No se encontro valor
        return false
    }
    //actualiza dato
    actualizar(valor,nuevo){
    	if(this.repeticion || !(this.buscar(nuevo))){
		    var nodo = this.primero
		    while(nodo != null){
		        if(nodo.valor === valor){
		            nodo.valor = nuevo
		        }
		        nodo = nodo.siguiente
		    }
		}
		else alert("El Valor Nuevo ya existe")
    }
    //Guardar JSON
    guardar(){
        const json = {
            categoria: "Cola",
            repeticion: this.repeticion,
            valores: []
        }
        var nodo = this.primero
        while(nodo !== null){
            json.valores.push(nodo.valor)
            nodo = nodo.siguiente
        }
        const txt = JSON.stringify(json, null, '   ')
        return {nombre: "Cola.json", text: txt}
    }
    //Cargar JSON
    cargar(){
    
    }
}

export default Cola