import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private librosService: LibrosService) { }

  text: string;

  results: string[];

  libros: any;

  ngOnInit() {
    this.librosService.getBooks().subscribe(response => {
      this.libros = response;
      console.log(response);
    });
  }

  search(event) {
    this.results = this.libros;
  }

}
