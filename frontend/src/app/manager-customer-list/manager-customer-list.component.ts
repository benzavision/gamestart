import {Component, OnInit,HostBinding} from '@angular/core';

import {CustomersService} from '../services/customers.service';
import { Customer} from '../models/Customer';



@Component({
  selector: 'app-manager-customer-list',
  templateUrl: './manager-customer-list.component.html',
  styleUrls: ['./manager-customer-list.component.css']
})
export class ManagerCustomerListComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  customers: any = [];

  constructor(private customerService : CustomersService, ) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers()
      .subscribe(
        res => {
          this.customers = res;
        },
        err => console.error(err)
      );
  }
}
