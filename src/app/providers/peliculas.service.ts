import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';//map

@Injectable()
export class PeliculasService {
  private apiKey:string = "9bb675a23fa0683a9e48800d96912c38";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp) {
                }

  getPopulares(){
    let url= `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json().results);

  }

  getPopularesNinos(){
    let url= `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json().results);

  }

  getCartelera(){
    let desde=new Date();
    let hasta=new Date();
    hasta.setDate( hasta.getDate()+7);
    let desdeStr= `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaStr= `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;
    // let fechaAct=new datePipe().transform(this.fecha, 'yyyy-MM-dd');
    let url= `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json().results);
  }

  buscarPelicula(texto:string){
    let url=`${this.urlMoviedb}/search/movie?query=${texto}sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).map(res=> res.json());
  }


}
