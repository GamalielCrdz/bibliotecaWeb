import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  results: string[] = [];
  libros: any = [];
  text: string = '';
  categoryId: number;

  constructor(private librosService: LibrosService,
    private activatedRouter: ActivatedRoute) { }

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
    this.activatedRouter.params.subscribe(param => {
      if (param.category) {
        this.librosService.getLibrosByCategories(param.category).subscribe(response => {
          const respuesta: any = response;
          this.results = [];
          this.results.push(...respuesta.categoria);
          console.log(this.results);
        });
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
