class Burbuja{
    constructor(){
        this.vector = []
    }

    cargar(vec){
        for(var i in vec){
            this.vector.push(vec[i])
        }
        this.ordenar()
    }

    guardar(){
        const json = {
            categoria: "Burbuja",
            vector: []
        }
        json.vector = this.vector
        const txt = JSON.stringify(json, null, '   ');
        return {nombre: "Burbuja.json", text: txt}
    }

    ordenar(){
        let aux=0;
        for(let i=0;i<this.vector.length;i++){
            for(let j=0; j<(this.vector.length-1);j++){
                if(ascii(this.vector[j]) > ascii(this.vector[j+1])){
                    aux = this.vector[j]
                    this.vector[j] = this.vector[j+1]
                    this.vector[j+1] = aux;
                }
            }
        }
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

export default Burbuja