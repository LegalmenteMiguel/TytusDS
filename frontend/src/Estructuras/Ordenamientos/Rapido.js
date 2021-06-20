class Rapido{
    constructor(){
        this.areglo = []
    }

    cargar(vec){
        for(var i in vec){
            this.vector.push(vec[i])
        }
        ordenar()
    }

    guardar(){
        const json = {
            categoria: "Rapido",
            valores: []
        }
        json.valores = this.areglo
        const txt = JSON.stringify(json, null, '   ');
        return {nombre: "Rapido.json", text: txt}
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
            if (ascii(this.areglo[j]) < ascii(aux)){
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

export default Rapido