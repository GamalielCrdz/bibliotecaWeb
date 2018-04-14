import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  results: string[] = [];
  libros: any;
  text: string = "";

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      console.log(response);
    });
    this.librosService.currentSearch.subscribe(results => {
      if (results.length > 0) {
        this.results = results;
      }
    });
  }

  search(event) {
    
      this.results = this.libros.filter(value => {
        if (value.titulo.toUpperCase().includes(this.text.toUpperCase())) {
          return value;
        }
      });
    
  }



}
