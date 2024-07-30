
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL = "http://localhost:8070/api/customer";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private getToken() {
    return localStorage.getItem('jwt');
  }

  // Helper method to create headers with JWT
  private createHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getToken()}`
      })
    };
  }

  getAllUnpaidBills() : Observable<any[]>{
    return this.http.get<any[]>(`${BASE_URL}/bills`, this.createHeaders());
  }
}
