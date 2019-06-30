import { Component, OnInit } from '@angular/core';
import {Console} from '../../models/Console';
import {Customer} from '../../models/Customer';
import {CustomersService} from '../../services/customers.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {ShoppingService} from '../../services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private shoppingService: ShoppingService,
    private customersService: CustomersService, ) { }

  title = 'GameStart';
  word: string;
  login: boolean;

  loggedinCustomer: Customer = {
    name : 'Login'};

  cartQuantity: number;

ngOnInit() {
    this.getLoggedin();
  this.shoppingService.loadCart();
  this.cartQuantity = this.shoppingService.items.length ;
  }


  logout(){
  this.customersService.logout();
  window.location.reload();
  this.login = false;
  }

  getLoggedin(){
  if (localStorage.getItem('loginUser')){
    this.login = true;

    console.log(this.customersService.getLoginId() );


    this.customersService.getLogin()
      .subscribe(
        res => {
          this.loggedinCustomer = res;
          this.login = true;
        },
        err => console.log(err)
      );
  }

  }



}
