import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[] = ["Spiderman","Ironman","Hulk","Thor"]
  heroe_borrado:string = ""

  borrar_heroe():void{
    console.log("Borrando...")

    this.heroe_borrado = this.heroes.pop() || ""
  }
}
