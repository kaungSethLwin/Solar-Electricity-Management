import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../components/dashboard/SignUpRequest';

const BASE_URL = 'http://localhost:8070/api/admin';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  // House endpoints
  createOrUpdateHouse(house: any): Observable<any> {
    return this.http.post(`${BASE_URL}/houses`, house, httpOptions);
  }

  getHouseById(houseId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/houses/${houseId}`);
  }

  getAllHouses(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/houses`);
  }

  deleteHouse(houseId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/houses/${houseId}`);
  }

  // findHouseByMeterNumber(meterNumber: string): Observable<any> {
  //   return this.http.get(`${BASE_URL}/houses/meter-number/${meterNumber}`);
  // }


  // findHousesByCity(city: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/houses/city/${city}`);
  // }

  // findHousesByState(state: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/houses/state/${state}`);
  // }

  // findHousesByUserId(userId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/houses/user/${userId}`);
  // }

  // Bill endpoints
  createOrUpdateBill(bill: any): Observable<any> {
    return this.http.post(`${BASE_URL}/bills`, bill, httpOptions);
  }

  getBillById(billId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/bills/${billId}`);
  }

  getAllBills(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/bills`);
  }

  deleteBill(billId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/bills/${billId}`);
  }

  // findBillsByStatus(status: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/bills/status/${status}`);
  // }

  // findBillsByHouseId(houseId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/bills/house/${houseId}`);
  // }

  // findBillsByDateRange(startDate: string, endDate: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/bills/date-range?startDate=${startDate}&endDate=${endDate}`);
  // }

  // findBillsByDueDate(dueDate: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/bills/due-date/${dueDate}`);
  // }

  // findBillsByPaidDate(paidDate: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${BASE_URL}/bills/paid-date/${paidDate}`);
  // }

  // User endpoints
  updateUser(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/users/update`, user, httpOptions);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/users/${userId}`);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}/users`);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/users/${userId}`);
  }

  createUser(signupRequest: SignUpRequest): Observable<string> {
    return this.http.post<string>(`${BASE_URL}/createUser`, signupRequest, { 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/plain' 
      }),
      responseType: 'text' as 'json' 
    });
  }
  
  // findUserByUsername(username: string): Observable<any> {
  //   return this.http.get(`${BASE_URL}/users/username/${username}`);
  // }

  getAllreports(): Observable<any[]>{
    return this.http.get<any[]>(`${BASE_URL}/reports/dashboard`);
  }
}
