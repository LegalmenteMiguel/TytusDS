class Nodo {
    constructor(valor){
        this.izquierdo = null
        this.derecho = null
        this.valor = valor
        this.altura = 0
    }
}

class AVL {
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

function _agregar(valor, nodo){
    if(nodo === null){
        return new Nodo(valor)
    }
    else if(valor < nodo.valor){
        nodo.izquierdo = _agregar(valor, nodo.izquierdo)
    }
    else if(valor >= nodo.valor){
        nodo.derecho = _agregar(valor, nodo.derecho)
    }
    nodo = balancear(nodo, valor)
    nodo.altura = Math.max(altura(nodo.derecho), altura(nodo.derecho)) + 1
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
            //nodo.dato = delete_min()
        }
        else if(nodo.izquierdo === null && nodo.derecho === null){
            return null
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
    nodo = balancear(nodo, valor)
    nodo.altura = Math.max(altura(nodo.derecho), altura(nodo.izquierdo)) + 1
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

function balancear(nodo, valor){
    if((altura(nodo.izquierdo)-altura(nodo.derecho)) == 2){
        if(valor < nodo.izquierdo.valor){
            nodo = rotacionSI(nodo)
        }
        else{
            nodo = rotacionDI(nodo)
        }
    }
    if((altura(nodo.derecho)-altura(nodo.izquierdo)) == 2){
        if(valor >= nodo.derecho.valor){
            nodo = rotacionSD(nodo)
        }
        else{
            nodo = rotacionDD(nodo)
        }
    }
    return nodo
}

function rotacionSRL(nodo) {
    var aux = nodo.izquierdo
    nodo.izquierdo = aux.derecho
    aux.derecho = nodo
    nodo.altura = Math.max(altura(nodo.izquierdo), altura(nodo.derecho)) + 1 
    aux.altura = Math.max(altura(aux.izquierdo), altura(nodo)) + 1
    return aux
}

function rotacionDI(nodo) {
    nodo.izquierdo = rotacionSD(nodo.izquierdo)		
    return rotacionSRL(nodo)
}

function rotacionSD(nodo) {
    var aux = nodo.derecho
    nodo.derecho = aux.izquierdo
    aux.izquierdo = nodo		
    nodo.altura = Math.max(altura(nodo.izquierdo), altura(nodo.derecho)) + 1
    aux.altura = Math.max(altura(aux.derecho), nodo.altura) + 1
    return aux
}

function rotacionDD(nodo) {
    nodo.derecho = rotacionSRL(nodo.derecho)
    return rotacionSD(nodo)
}

function altura(nodo){
    if(nodo === null){
        return -1
    }
    return nodo.altura
}

function maximo(nodo){
    if(nodo.derecho === null){
        return nodo
    }
    else{
        return maximo(nodo.derecho)
    }
}

function _pre(nodo){
    if(nodo === null){
        return
    }
    _pre(nodo.izquierdo)
    _pre(nodo.derecho)
    console.log(nodo.valor)
}

const bi = new AVL(true)

bi.agregar(50)
bi.agregar(42)
bi.agregar(48)
bi.agregar(58)
bi.agregar(81)
bi.agregar(25)
bi.pre()
bi.eliminar(58)
console.log("")
bi.pre()
//console.log(bi)