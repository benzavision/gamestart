import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getConsoles() {
    return this.http.get(`${this.API_URI}/consoles`);
  }

  getCustomer(id: string) {
    return this.http.get(`${this.API_URI}/consoles/${id}`);
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${this.API_URI}/consoles/${id}`);
  }

  saveCustomer(customer: Customer) {
    return this.http.post(`${this.API_URI}/consoles`, customer);
  }

  updateCustomer(id: string|number, updatedCustomer: Customer): Observable<Customer> {
    return this.http.put(`${this.API_URI}/consoles/${id}`, updatedCustomer);
  }

}
