import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';//map

@Injectable()
export class PeliculasService {
  private apiKey:string = "9bb675a23fa0683a9e48800d96912c38";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private fecha=new Date().getDate();

  constructor( private jsonp:Jsonp) {
                }

  getPopulares(){
    let url= `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json());

  }
  getPeliculasCines(){
    // let fechaAct=new datePipe().transform(this.fecha, 'yyyy-MM-dd');
    let url= `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2018-03-10&primary_release_date.lte=2018-03-10&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json());
  }

  buscarPelicula(texto:string){
    let url=`${this.urlMoviedb}/search/movie?query=${texto}sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json());
  }


}
