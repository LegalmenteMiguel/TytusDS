class Seleccion{
    constructor(){
        this.arreglo = []
    }

    cargar(){
    }
    
    guardar(){
    }

    ordenar(){
        var min, aux
        for(var i = 0; i < this.arreglo.length; i++){
            min = i
            for(var j = i+1; j < this.arreglo.length; j++){
                if(this.arreglo[j] < this.arreglo[min]){
                    min = j
                }
            }
            aux = this.arreglo[i]
            this.arreglo[i] = this.arreglo[min]
            this.arreglo[min] = aux
        }
    }

    
}

export default Seleccion