import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from "./components/pelicula/pelicula.component";
import {SearchComponent} from './components/search/search.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula', component: PeliculaComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'buscar/:texto', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes,{useHash:true});
