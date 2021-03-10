/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number, ...c:number[]):number {
    let total:number = a+b
    c.forEach(i => {
        total+=i
    });
    return total
}

const sumar_flecha = (a:number,b:number):number=>{
    return a+b
}

console.log(sumar(10,10,10,10))
console.log(sumar_flecha(1,2))

interface PersonajePrinp{
    nombre:string
    pv:number
    mostrarPv: () => void
}

function curar(personaje:PersonajePrinp, valor_curar:number):void {
    personaje.pv += valor_curar
}

const persona:PersonajePrinp = {
    nombre:"Luis",
    pv:25,
    mostrarPv(){
        console.log("Puntos de vida: ", this.pv)
    }
}

curar(persona,25)
persona.mostrarPv()