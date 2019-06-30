import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../models/Game';
import {Item} from '../models/Item';
import {GamesService} from './games.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient,
              private gameService: GamesService,) { }

  total: number = 0;
  items: Item[] = [];

  game: Game ;

  checkout(){


  }

  saveGameInCart( id: number, price:number , name:string){


    let item = {
      gametitle: name,
      gameid: id,
      price: price,
      quantity: 1
    };

    if (localStorage.getItem('cart') == null) {
      let cart: any = [];
      cart.push(JSON.stringify(item));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        const item: Item = JSON.parse(cart[i]);
        if (item.gameid == id) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        cart.push(JSON.stringify(item));
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let item: Item = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    this.loadCart();
    window.location.reload();


  }

  removeGameFromCart(id:number){
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
    window.location.reload();
  }

  clearCart(){
    localStorage.removeItem('cart');
    window.location.reload();
  }

  loadCart(){

    if (localStorage.getItem('cart')){


      this.total = 0;
      this.items = [];
      let cart = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          gameid: item.gameid,
          price: item.price,
          quantity: item.quantity
        });

        this.total += item.price * item.quantity;
      }
    }

  }



  createBestellung(){

  }

  updateGames(){

  }


}


