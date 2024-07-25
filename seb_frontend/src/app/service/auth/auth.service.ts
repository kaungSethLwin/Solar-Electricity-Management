import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = "http://localhost:8070/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(createRequest: any):Observable<any>{
    return this.http.post(BASE_URL + "api/auth/createUser", createRequest);
    
  }

  login(loginRequest: any):Observable<any>{
    const headers = { 'Content-Type': 'application/json' };
  return this.http.post(BASE_URL + 'api/auth/login', loginRequest, { headers });
    
  }

}
