import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';
import { Vista4Component } from './components/vista4/vista4.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'visualizacion1',
    component: Vista1Component,
  },
  {
    path: 'visualizacion2',
    component: Vista2Component,
  },
  {
    path: 'visualizacion3',
    component: Vista3Component,
  },
  {
    path: 'visualizacion4',
    component: Vista4Component,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
