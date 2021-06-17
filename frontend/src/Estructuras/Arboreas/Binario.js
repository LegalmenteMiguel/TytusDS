class Nodo {
    constructor(valor){
        this.valor = valor
        this.derecho = null
        this.izquierdo = null
    }
}

class Binario {
    constructor(repeticion){
        this.raiz = null
        this.repeticion = repeticion
    }

    agregar(valor){
        if(this.repeticion || !this.buscar(valor)){
            this.raiz = _agregar(valor, this.raiz)
        }
    }

    eliminar(valor){
        if(this.buscar(valor)){
            this.raiz = _eliminar(valor, this.raiz)
        }
    }

    actualizar(valor, nuevo){
        if(this.buscar(valor)){
            this.eliminar(valor)
            this.agregar(nuevo)
        }
    }

    buscar(valor){
        return _buscar(valor, this.raiz)
    }

    pre(){
        _pre(this.raiz)
    }

}

//export default Binario

function _pre(nodo){
    if(nodo === null){
        return
    }
    _pre(nodo.izquierdo)
    _pre(nodo.derecho)
    console.log(nodo.valor)
}

function _agregar(valor, nodo){
    if(nodo === null){
        nodo = new Nodo(valor)
    }
    else if(valor < nodo.valor){
        nodo.izquierdo = _agregar(valor, nodo.izquierdo)
    }
    else if(valor >= nodo.valor){
        nodo.derecho = _agregar(valor, nodo.derecho)
    }
    return nodo
}

function _eliminar(valor, nodo){
    if(nodo === null){
        return nodo
    }
    if(valor === nodo.valor){
        if(nodo.izquierdo !== null && nodo.derecho !== null){
            var aux = maximo(nodo.izquierdo)
            nodo.valor = aux.valor
            nodo.izquierdo = _eliminar(nodo.valor, nodo.izquierdo)
        }
        else if(nodo.izquierdo === null && nodo.derecho === null){
            nodo = null
        }
        else if(nodo.izquierdo === null){
            nodo = nodo.derecho
        }
        else if(nodo.derecho === null){
            nodo = nodo.izquierdo
        }
    }
    else if(valor < nodo.valor){
        nodo.izquierdo = _eliminar(valor, nodo.izquierdo)
    }
    else if(valor > nodo.valor){
        nodo.derecho = _eliminar(valor, nodo.derecho)
    }
    return nodo
}

function _buscar(valor, nodo){
    if(nodo === null){
        return false
    }
    if(valor === nodo.valor){
        return true
    }
    else if(valor < nodo.valor){
        return _buscar(valor, nodo.izquierdo)
    }
    else if(valor > nodo.valor){
        return _buscar(valor, nodo.derecho)
    }
}

function maximo(nodo){
    if(nodo.derecho === null){
        return nodo
    }
    else{
        return maximo(nodo.derecho)
    }
}

const bi = new Binario(true)

bi.agregar(50)
bi.agregar(15)
bi.agregar(42)
bi.agregar(78)
bi.agregar(10)
bi.actualizar(15, 5)
bi.pre()
//console.log()