import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomersService} from '../../services/customers.service';
import {Customer} from '../../models/Customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  title = 'GameStart';

  msg = '';

  customer: Customer = {
    name: '',
    email: '',
    password: '',




  };



  constructor(
    private customersServise : CustomersService,
    private router: Router,
  ) {
  }

  ngOnInit() {

    if (localStorage.getItem('loginUser')){
      this.router.navigate(['/profile']);
    }

  }


  login() {

      this.customersServise.login(this.customer.email, this.customer.password)
        .subscribe(
          res => {
            console.log(res);
            this.customer = res;
            this.customersServise.saveLogin(this.customer);
            this.msg = res["message"];

            if (this.customersServise.getLoginId()){
              this.router.navigate(['/profile']);
            }

          },
          err => console.error(err)
        );





  }

}
