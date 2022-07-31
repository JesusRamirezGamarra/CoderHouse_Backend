const fs = require('fs')
let ultimoId = 0

class Caja {
    constructor(ruta){
        this.ruta = ruta
        this.cosas = []

    }

    // guardar(cosa){
    //     this.cosas.push(cosa)
    //     return fs.promises.writeFile(this.ruta, JSON.stringify(this.cosas))
    // }

    async guardar(cosa){
        this.cosas.id = ultimoId +1
        this.cosas.push(cosa)
        await fs.promises.writeFile(this.ruta, JSON.stringify(this.cosas))
        cosole.log(`Termino de Grabar ${this.cosas.id }`)
        ultimoId ++ 
    }
}


const caja = new Caja()

const cosa = {
    nombnre: 'regla',
    precio:150
}

caja.guardar(cosa)