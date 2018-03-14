import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../providers/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;

  constructor(public _ps:PeliculasService,
              public route:ActivatedRoute) {

    this.route.params.subscribe(parametros=>{
        // console.log(parametros);
        this._ps.getPelicula(parametros['id'])
        .subscribe(pelicula =>{
          console.log(pelicula);
          this.pelicula=pelicula})

    });



              }

  ngOnInit() {
  }

}
