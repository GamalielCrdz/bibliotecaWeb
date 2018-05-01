import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';
import { Router } from '@angular/router';
import { ApiConfig } from '../../api-config';

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

  apiCOnfig: ApiConfig = new ApiConfig();

  results: string[] = [];

  libros: any = [];

  categories: any = [];

  popularBooks: any = [];

  popularBooksS: any = [];

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      console.log(this.libros);
      for (let index = 0; index < 5; index++) {
        const indexBook = this.getRandomInt(0, (this.libros.length - 1));
        this.popularBooksS.push(this.libros[indexBook]);
        if (index === 0 || index === 1) {
          const firstbook = this.getRandomInt(0, (this.libros.length - 1));
          this.popularBooks.push(this.libros.slice(firstbook, (firstbook + 4)));
        }
      }
      console.log('popular books S', this.popularBooksS);
      console.log('popular books', this.popularBooks);
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

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
