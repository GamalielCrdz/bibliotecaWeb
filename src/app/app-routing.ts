import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { VistaComponent } from './components/vista/vista.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'visualizacion/:id',
    component: VistaComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
  },
  {
    path: 'busqueda/:category',
    component: BusquedaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
