import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';
import { ActivatedRoute } from '@angular/router';
import { ApiConfig } from '../../api-config';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  results: string[] = [];
  libros: any = [];
  text: string;
  categoryId: number;
  popularBooks: any[] = [];
  apiCOnfig: ApiConfig = new ApiConfig();

  constructor(private librosService: LibrosService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      for (let index = 0; index < 4; index++) {
        const indexBook = this.getRandomInt(0, (this.libros.length - 1));
        this.popularBooks.push(this.libros[indexBook]);
      }
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

  setResult(event) {
    this.results = [];
    this.results.push(event);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
