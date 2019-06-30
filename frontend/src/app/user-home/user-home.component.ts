import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private customersServices : CustomersService) { }

  ngOnInit() {

  }

}
