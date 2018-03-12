import { Component } from '@angular/core';
import {PeliculasService} from './providers/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public _ps:PeliculasService){

    // this._ps.getPopulares().subscribe(data => {console.log("populares"),console.log(data)});
    // this._ps.getCartelera().subscribe(data => {console.log("cartelera"),console.log(data)});
    // this._ps.buscarPelicula("Rocky").subscribe(data => {console.log("buscar"),console.log(data)});

  }
}
