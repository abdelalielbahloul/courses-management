import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUser = 'http://localhost:3000/users';


  constructor( private http: HttpClient) { }

  _login(user){
    return this.http.get(`${this.apiUser}/login`,user);
  }





}


