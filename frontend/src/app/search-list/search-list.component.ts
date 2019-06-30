import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {GamesService} from '../services/games.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../models/Item';
import {ShoppingService} from '../services/shopping.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
              private gameService: GamesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private shoppingService: ShoppingService,) { }

  games: any = [];
  word: string;

  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    if (params.word) {
      this.gameService.searchGames(params.word)
        .subscribe(
          res => {

            console.log(res);
            this.word = params.word;
            this.games = res;
          },
          err => console.log(err)
        );
    }


  }

  gameInCart( id: number, price:number, name:string){

    this.shoppingService.saveGameInCart(id, price, name);


  }

}
