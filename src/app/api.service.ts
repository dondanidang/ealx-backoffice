import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://ealx-5b5328789e08.herokuapp.com/v1';

  constructor(private http: HttpClient) { }

  getOrderDiscounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order_discounts`);
  }
}
