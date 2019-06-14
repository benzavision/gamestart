import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(`${this.API_URI}/customers`);
  }

  getCustomer(id: string) {
    return this.http.get(`${this.API_URI}/customers/${id}`);
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${this.API_URI}/customers/${id}`);
  }

  saveCustomer(customer: Customer) {
    return this.http.post(`${this.API_URI}/customers`, customer);
  }

  updateCustomer(id: string|number, updatedCustomer: Customer): Observable<Customer> {
    return this.http.put(`${this.API_URI}/customers/${id}`, updatedCustomer);
  }

}
