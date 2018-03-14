import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app-routing';
import { LibrosService } from './services/libro.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';
import { Vista4Component } from './components/vista4/vista4.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Vista1Component,
    Vista2Component,
    Vista3Component,
    Vista4Component,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
