import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private librosService: LibrosService,
    private router: Router
  ) { }

  text: string;

  results: string[] = [];

  libros: any = [];

  categories: any = [];

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      console.log(this.libros);
    });
    this.getCategories();
  }

  search(event) {
    this.results = this.libros.filter(value => {
      if (value.titulo.toUpperCase().includes(this.text.toUpperCase())) {
        return value;
      }
    });
  }

  goToSearch() {
    this.librosService.setSearch(this.results);
    this.router.navigateByUrl('/busqueda');
  }

  getCategories() {
    this.librosService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }

  setResult(event) {
    console.log(event);
    this.results = [];
    this.results.push(event);
  }

}
