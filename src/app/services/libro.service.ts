import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';
import { BehaviorSubject, Observable } from 'rxjs/';

@Injectable()
export class LibrosService {

  apiConfig: ApiConfig = new ApiConfig();
  private search = new BehaviorSubject([]);
  public currentSearch = this.search.asObservable();

  constructor(private http: HttpClient) { }

  getBooks() {
    const headers = this.apiConfig.getHeaders();
    return this.http.get(this.apiConfig.getApiUrl() + '/libros/libros?format=json', { headers });
  }

  setSearch(results: any[]) {
    this.search.next(results);
  }

  getBook(id) {
    const headers = this.apiConfig.getHeaders();
    return this.http.get(this.apiConfig.getApiUrl() + `/libros/libro?id_libro=${id}&format=json`, { headers });
  }

  getCategories() {
    const headers = this.apiConfig.getHeaders();
    return this.http.get(this.apiConfig.getApiUrl() + `/libros/categorias?format=json`, { headers });
  }

  getLibrosByCategories(categoryId) {
    const headers = this.apiConfig.getHeaders();
    return this.http.get(this.apiConfig.getApiUrl() + `/libros/categorias_libros?id_categoria=${categoryId}`, { headers });
  }

}
