import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../services/libro.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public libro: any = {
    titulo: '',
    autor: '',
    rutaPDF: ''
  };

  constructor(private activatedRouter: ActivatedRoute,
    private libroService: LibrosService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.libroService.getBook(params.id).subscribe(response => {
        this.libro = response;
      });
    });
  }

}
