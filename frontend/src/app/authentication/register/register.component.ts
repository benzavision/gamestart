import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CustomersService} from '../../services/customers.service';
import {Customer} from '../../models/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private customersServise : CustomersService,
               private router: Router, ) { }
  title = 'GameStart';

  msg='';

  customer: Customer = {
    name: '',
    last_name: '',
    email: '',
    password: '',

  };

  ngOnInit() {

    if (localStorage.getItem('loginUser')){
      this.router.navigate(['/profile']);
    }

  }

  register() {

    this.customersServise.saveCustomer(this.customer,)
      .subscribe(
        res => {
          console.log(res);
          this.msg = res["message"];
        },
        err => console.error(err)
      );


  }

}
