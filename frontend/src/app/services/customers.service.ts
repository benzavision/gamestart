import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  API_URI = 'http://localhost:3000/api';

  public loggedinCustomer: Customer ={
    name : ''
};
  public loggedinId: 0;


  constructor(private http: HttpClient) {

  }


  saveLogin( c: Customer){
    if(c.id){
      localStorage.setItem('loginUser', c.id.toString());
    } else {
      this.logout();
    }
  }

  getLogin(){
    return this.getCustomerById(localStorage.getItem('loginUser')) ;
  }

  getLoginId(){
    return localStorage.getItem('loginUser') ;
  }

  logout(){
    localStorage.removeItem('loginUser');
    localStorage.removeItem('cart');
  }

  getCustomers() {
    return this.http.get(`${this.API_URI}/customers`);
  }

  getCustomerById(id: string) {
    return this.http.get(`${this.API_URI}/customers/get/${id}`);
  }

  login(email: string, password: string) {

    return this.http.get(`${this.API_URI}/customers/auth/${email}/${password}`);
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
