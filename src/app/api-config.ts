import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ApiConfig {
  private apiURL: string;
  private headers: HttpHeaders;

  constructor() {
    this.apiURL = 'http://debian/BibliotecaV/index.php';
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getApiUrl(): string {
    return this.apiURL;
  }
  getHeaders(): HttpHeaders {
    return this.headers;
  }
}
