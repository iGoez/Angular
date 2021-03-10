/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number
    segundo:number
    cancion:string
    detalles: Detalles
}

interface Detalles{
    autor:string
    anio:number
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:36,
    cancion: "Mes",
    detalles: {
        autor:"Ed Sheeran",
        anio:2015
    }
}

const {volumen:volumen_reproductor,segundo,cancion,detalles} = reproductor
const {autor} = detalles

// console.log(`El volumen actual es de: ${volumen_reproductor}`)
// console.log(`El segundo actual es de: ${segundo}`)
// console.log(`El canción actual es de: ${cancion}`)
// console.log(`El autor actual es de: ${autor}`)

const dbz: string[] = ["Goku","Vegetta","Trunks"]
const [, , tPropiedad] = dbz

// console.log(pPropiedad)
// console.log(sPropiedad)
console.log(tPropiedad)