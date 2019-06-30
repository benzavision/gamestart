import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../services/categories.service';
import {GamesService} from '../services/games.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingService} from '../services/shopping.service';
import {Item} from '../models/Item';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  constructor(private categoriesService: CategoriesService,
              private gameService: GamesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private shoppingService: ShoppingService,) { }

  games: any = [];
  category : '';


  ngOnInit() {


    const params = this.activatedRoute.snapshot.params;
    if (params.genre) {
      this.gameService.getGamesByGenre(params.genre)
        .subscribe(
          res => {

            console.log(res);
            this.category = params.genre;
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
