import { Component, OnInit } from '@angular/core';
import {GamesService} from '../services/games.service';
import {ShoppingService} from '../services/shopping.service';
import {Customer} from '../models/Customer';
import {CustomersService} from '../services/customers.service';

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.css']
})
export class UserShoppingCartComponent implements OnInit {

  constructor(
    private gamesService : GamesService,
    private shoppingService : ShoppingService,
    private  customersService: CustomersService) { }

  items: any = [];
  total: number;
  loggedinCustomer: Customer = {
    name : '',
    credit: 0
  };

  ngOnInit() {
    this.getLoggedin();
    this.shoppingService.loadCart();
    this.items =this.shoppingService.items;
    this.total = this.shoppingService.total;
  }


  removeGame(id: number){
    this.shoppingService.removeGameFromCart(id);
  }

  getLoggedin(){
    if (localStorage.getItem('loginUser')){

      console.log(this.customersService.getLoginId() );


      this.customersService.getLogin()
        .subscribe(
          res => {
            this.loggedinCustomer = res;
          },
          err => console.log(err)
        );
    }

  }

  clearCart(){
    this.shoppingService.clearCart();
  }


}
