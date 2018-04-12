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

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      console.log(response);
    });
  }
  search(event) {
    if (this.results.length === 0) {
      this.results = this.libros;
    }
  }

}
