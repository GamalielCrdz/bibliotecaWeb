import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ApiConfig {
  private apiURL: string;
  private headers: HttpHeaders;
  private apiURLForBooks: string;

  constructor() {
    this.apiURL = 'https://fimebookapi.herokuapp.com/index.php';
    this.apiURLForBooks = 'https://fimebookapi.herokuapp.com/';
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getApiUrl(): string {
    return this.apiURL;
  }

  getApiUrlForBooks(): string {
    return this.apiURLForBooks;
  }

  getHeaders(): HttpHeaders {
    return this.headers;
  }
}
