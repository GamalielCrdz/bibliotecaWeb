import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';

@Injectable()
export class UserService {

  apiConfig: ApiConfig = new ApiConfig();

  constructor(private http: HttpClient) { }

  

}
