class Rapido{
    constructor(){
        this.areglo = []
    }

    cargar(){
    }

    ordenar(min, max){
        if(min < max){
            var aux = this._ordenar(min, max)
            this.ordenar(min, aux-1)
            this.ordenar(aux+1, max)
        }
    }

    _ordenar(min, max){
        var aux = this.areglo[max];  
        var i = (min - 1) 
        for (var j = min; j <= max- 1; j++){
            if (this.areglo[j] < aux){
                i++;
                var temp = this.areglo[i]
                this.areglo[i] = this.areglo[j]
                this.areglo[j] = temp
            }
        }
        var pivote = this.areglo[i + 1]
        this.areglo[i + 1] = this.areglo[max]
        this.areglo[max] = pivote
        return (i + 1)
    }
}

export default Rapido