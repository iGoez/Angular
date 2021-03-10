/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe{
    nombre:string
    edad:number
    direccion:Direccion

    mostrar_direccion:()=>string
}

interface Direccion{
    calle:string
    pais:string
    ciudad:string
}

const superHeroe:SuperHeroe = {
    nombre:"Spiderman",
    edad: 30,
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY",
    },
    mostrar_direccion(){
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

const direccion = superHeroe.mostrar_direccion()

console.log(direccion)