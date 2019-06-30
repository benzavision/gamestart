import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/Game';
import {Item} from '../models/Item';
import {ShoppingService} from '../services/shopping.service';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService,
              private shoppingService: ShoppingService,) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames()
      .subscribe(
        res => {
          this.games = res;
        },
        err => console.error(err)
      );
  }

  gameInCart( id: number, price:number, name:string){

      this.shoppingService.saveGameInCart(id, price, name);


  }



}

