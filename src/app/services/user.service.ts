import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';

@Injectable()
export class UserService {

  apiConfig: ApiConfig = new ApiConfig();

  constructor(private http: HttpClient) { }

  logIn(user: any) {
    const headers = this.apiConfig.getHeaders();
    return this.http.post(this.apiConfig.getApiUrl() + '/Login/entrar', user);
  }

  createUser(user: any) {
    const headers = this.apiConfig.getHeaders();
    return this.http.post(this.apiConfig.getApiUrl() + '/Login/registro', user);
  }

}
