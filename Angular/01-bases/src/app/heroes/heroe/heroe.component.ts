import { Component } from '@angular/core';

@Component({
    selector:"app-heroe",
    templateUrl: "heroe.component.html"
})
export class HeroeComponent {

    nombre:string = "Ironman";
    edad:number = 45;

    
    get get_nombre() : string {
        return this.nombre.toUpperCase();
    }
    

    obtener_nombre():string{
        return `${this.nombre} -- ${this.edad}`;
    }

    cambiar_nombre():void{
        this.nombre= "Spiderman";
    }

    cambiar_edad():void{
        this.edad= 25;
    }
}