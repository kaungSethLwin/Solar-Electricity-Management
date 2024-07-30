import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../../admin/components/dashboard/SignUpRequest';
import { Bill } from '../../admin/components/dashboard/Bill';
import { House } from '../../admin/components/dashboard/House';


const BASE_URL = 'http://localhost:8070/api/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

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


  getAllReports(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/reports/dashboard`, this.createHeaders());
  }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/users/customers`, this.createHeaders());
  }
}
