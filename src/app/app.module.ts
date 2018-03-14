import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,JsonpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//rutas
import {APP_ROUTING} from './app.routes';
//servicios
import {PeliculasService} from "./providers/peliculas.service";
//pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { GaleriaComponent } from './components/home/galeria.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
