/*
    ===== Código de TypeScript =====
*/

let habilidades:string[] = ["Hola", "Mundo"]
habilidades.push("Buenas")
console.log(habilidades)
habilidades.pop()
console.log(habilidades)
habilidades.splice(0,1)
console.log(habilidades)

interface Personaje{
    nombre:string
    hp:number
    habilidades:string[]
    pueblo_natal?:string
}

const personaje:Personaje = {
    nombre: "Strider",
    hp:100,
    habilidades: ["Bash","Counter","Healing"]
}

console.log(personaje)
personaje.pueblo_natal = "Pueblo Paleta"
console.log(personaje)