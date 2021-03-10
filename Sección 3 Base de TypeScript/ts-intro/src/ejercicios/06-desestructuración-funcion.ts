/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc:string
    precio:number
}

const telefono:Producto = {
    desc: "Nokia A1",
    precio: 150
}

const tableta:Producto = {
    desc: "IPad Air",
    precio: 350
}

export function calcularISV(productos:Producto[]):[number,number] {
    let total = 0

    productos.forEach(({precio}) => {
        total += precio
    });

    return [total, total*0.15]
}

const articulos:Producto[] = [telefono,tableta]
const [pValor,sValor] = calcularISV(articulos)
console.log("USV: $",sValor)
console.log("Total: $",pValor)