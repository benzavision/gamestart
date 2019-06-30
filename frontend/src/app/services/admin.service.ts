import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  API_URI = 'http://localhost:3000/api';

  public loggedinAdmin: Admin = {
    name : ''
  };
  public loggedinId: 0;


  constructor(private http: HttpClient) {

  }


  saveLogin( a : Admin){
    if(a.id){
      localStorage.setItem('loginAdmin', a.id.toString());
    } else {
      this.logout();
    }

  }

  getLogin(){
    return this.getAdminById(localStorage.getItem('loginAdmin')) ;
  }

  getLoginId(){
    return localStorage.getItem('loginAdmin') ;
  }

  logout(){
    localStorage.removeItem('loginAdmin');
  }


  getAdminById(id: string) {
    return this.http.get(`${this.API_URI}/admin/get/${id}`);
  }

  login(email: string, password: string) {

    return this.http.get(`${this.API_URI}/admin/auth/${email}/${password}`);
  }


}
