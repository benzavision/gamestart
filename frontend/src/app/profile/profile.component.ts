import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/Customer';
import {CustomersService} from '../services/customers.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  msg: '';

  customer: Customer = {

    id: 0,
    name: '',
    last_name: '',
    email: '',
    password: '',
    credit: 0,
    avatar: ''
  };

  constructor(
    private customersService : CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log(this.msg);
    this.checkLogin();

    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.customersService.getCustomerById(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.customer = res;
          },
          err => console.log(err)
        );
    }

  }

  checkLogin(){
    if (this.customersService.getLoginId()) {
      this.customersService.getLogin()
        .subscribe(
          res => {
            this.customer = res;
          },
          err => console.error(err)
        );
    } else {
      this.router.navigate(['/login'], );
    }

  }

  updateCustomer() {
    this.customersService.updateCustomer(this.customer.id, this.customer)
      .subscribe(
        res => {
          console.log(res);
          this.msg = res["message"];
        },
        err => console.error(err)
      );
  }

}
