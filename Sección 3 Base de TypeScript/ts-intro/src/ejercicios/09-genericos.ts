/*
    ===== Código de TypeScript =====
*/

function tipo<T>(argumento: T): T {
    return argumento
}

console.log(tipo(5))
console.log(tipo([1,5]))