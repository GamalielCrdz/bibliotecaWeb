import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ApiConfig {
  private apiURL = 'http://localhost/BibliotecaV';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  getApiUrl(): string {
    return this.apiURL;
  }
  getHeaders(): HttpHeaders {
    return this.headers;
  }
}
