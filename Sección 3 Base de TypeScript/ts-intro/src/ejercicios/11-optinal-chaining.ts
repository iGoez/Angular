/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string
    hijos?:string[]
}

const pasajero1: Pasajero = {
    nombre:"Iván"
}

const pasajero2: Pasajero = {
    nombre:"Camilo",
    hijos:["Iv", "Ca"]
}

function imprimir_hijos(pasajero:Pasajero):void {
    const numero_hijos = pasajero.hijos?.length || 0
    console.log(numero_hijos)
}

imprimir_hijos(pasajero1)
  