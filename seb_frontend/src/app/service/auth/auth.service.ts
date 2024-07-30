import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const BASE_URL = "http://localhost:8070/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginRequest: { email: string, password: string }): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post(BASE_URL + 'api/auth/login', loginRequest, { headers });
}

  

  

}
