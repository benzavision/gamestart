import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../services/categories.service';
import { ConsolesService} from '../services/consoles.service';
import { Categorie} from '../models/Categorie';
import { Console} from '../models/Console';
import { Router, ActivatedRoute } from '@angular/router';
import { GamesService} from '../services/games.service';
import { Game} from '../models/Game';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-manager-add-game',
  templateUrl: './manager-add-game.component.html',
  styleUrls: ['./manager-add-game.component.css']
})
export class ManagerAddGameComponent implements OnInit {

  categories: any = [];
  consoles: any = [];

  game: Game = {
    id: 0,
    image: '',
    title: '',
    console: '',
    created_at: new Date(),
    genre: '',
    price: 0,
    old_price: 0,
    maker: '',
    location: '',
    stock: 0

  };

  edit = false;

  constructor(private categoriesService: CategoriesService,
              private gameService: GamesService,
              private consolesService: ConsolesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private adminService: AdminService) { }

  ngOnInit() {
    this.getCategories();
    this.getConsoles();
    this.checkLogin();


    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {

            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }

  }

  checkLogin(){
    if (!this.adminService.getLoginId()) {
      this.router.navigate(['/auth/admin-login'], );
    }

  }

  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(
        res => {
          this.categories = res;
        },
        err => console.error(err)
      );
  }

  getConsoles() {
    this.consolesService.getConsoles()
      .subscribe(
        res => {
          this.consoles = res;
        },
        err => console.error(err)
      );
  }


  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );


  }


  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );
  }

  }
