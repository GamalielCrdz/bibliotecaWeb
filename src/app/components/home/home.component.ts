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

  libros: any[] = [];

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros.push(...response);
      console.log(this.libros);
    });
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

}
