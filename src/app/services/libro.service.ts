import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';

@Injectable()
export class LibrosService {

  apiConfig: ApiConfig = new ApiConfig();

  constructor(private http: HttpClient) { }

  getBooks() {
    const headers = this.apiConfig.getHeaders();
    return this.http.get(this.apiConfig.getApiUrl() + '/libros/libros?format=json', { headers });
  }

}
