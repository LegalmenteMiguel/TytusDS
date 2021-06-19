class Seleccion{
    constructor(){
        this.arreglo = []
    }

    cargar(){
    }
    
    guardar(){
        const json = {
            categoria: "Selección",
            valores: []
        }
        json.valores = this.areglo
        const txt = JSON.stringify(json, null, '   ');
        return {nombre: "Selección.json", text: txt}
    }

    ordenar(){
        var min, aux
        for(var i = 0; i < this.arreglo.length; i++){
            min = i
            for(var j = i+1; j < this.arreglo.length; j++){
                if(ascii(this.arreglo[j]) < ascii(this.arreglo[min])){
                    min = j
                }
            }
            aux = this.arreglo[i]
            this.arreglo[i] = this.arreglo[min]
            this.arreglo[min] = aux
        }
    }
}

function ascii(txt){
    var sum = 0
    for(var i in txt){
        sum += txt[i].charCodeAt(0)
    }
    return sum
}

export default Seleccion