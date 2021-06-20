class Insercion{
    constructor(){
        this.vector = []
    }

    cargar(vec){
        for(var i in vec){
            this.vector.push(vec[i])
        }
        ordenar()
    }

    guardar(){
        const json = {
            categoria: "Insercion",
            vector: []
        }
        json.vector = this.vector
        const txt = JSON.stringify(json, null, '   ');
        return {nombre: "Insercion.json", text: txt}
    }

    ordenar(){
        let aux
        let pos
        for(let i=0;i<this.vector.length;i++){
            pos = i
            aux = this.vector[i]
            while((pos>0)&&(ascii(this.vector[pos-1]) > ascii(aux))){
                this.vector[pos] = this.vector[pos-1]
                pos--
            }
            this.vector[pos] = aux;
        }
    }
}

export default Insercion