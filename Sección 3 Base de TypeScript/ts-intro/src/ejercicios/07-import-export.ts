import { Producto, calcularISV } from './06-desestructuración-funcion';
/*
    ===== Código de TypeScript =====
*/


const carrito_compras: Producto[] = [
    {
        desc: "Telefono 1",
        precio:100
    },
    {
        desc: "Telefono 2",
        precio:150
    }
]

const [total,isv] = calcularISV(carrito_compras)
console.log("USV: $",isv)
console.log("Total: $",total)
