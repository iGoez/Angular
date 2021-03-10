/*
    ===== Código de TypeScript =====
*/

class Persona_normal{

    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Hero extends Persona_normal{
    constructor(
        public alter_ego:string,
        public edad:number,
        public nombre_real:string
    ){
        super(nombre_real,"New York, USA")
    }

    imprimir_nombre(){
        return `${this.alter_ego} ${this.edad}`
    }
}

const ironman = new Hero("Ironman", 35, "Tony")

console.log(ironman)
