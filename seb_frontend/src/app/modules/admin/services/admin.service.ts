import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../components/dashboard/SignUpRequest';
import { House } from '../components/dashboard/House';
import { Bill } from '../components/dashboard/Bill';

const BASE_URL = 'http://localhost:8070/api/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  // House endpoints
  createHouse(house: House): Observable<any> {
    return this.http.post(`${BASE_URL}/houses/create`, house, this.createHeaders());
  }

  updateHouse(house: any): Observable<any> {
    return this.http.post(`${BASE_URL}/houses/update`, house, this.createHeaders());
  }

  getHouseById(houseId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/houses/${houseId}`, this.createHeaders());
  }

  getAllHouses(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/houses`, this.createHeaders());
  }

  getAllHouseNames(): Observable<any[]>{
    return this.http.get<any[]>(`${BASE_URL}/houses/names`,this.createHeaders())
  }

  deleteHouse(houseId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/houses/${houseId}`, this.createHeaders());
  }

  // Bill endpoints
  createBill(bill: Bill): Observable<any> {
    return this.http.post(`${BASE_URL}/bills/create`, bill, this.createHeaders());
  }

  updateBill(bill: any): Observable<any> {
    return this.http.post(`${BASE_URL}/bills/update`, bill, this.createHeaders());
  }

  getBillById(billId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/bills/${billId}`, this.createHeaders());
  }

  getAllBills(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/bills`, this.createHeaders());
  }

  deleteBill(billId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/bills/${billId}`, this.createHeaders());
  }

  // User endpoints
  updateUser(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/users/update`, user, this.createHeaders());
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/users`, this.createHeaders());
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/users/${userId}`, this.createHeaders());
  }

  createUser(signupRequest: SignUpRequest): Observable<string> {
    return this.http.post<string>(`${BASE_URL}/user/createUser`, signupRequest, this.createHeaders());
  }

  getAllReports(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/reports/dashboard`, this.createHeaders());
  }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/users/customers`, this.createHeaders());
  }
}
