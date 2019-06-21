import {Component, HostBinding, OnInit} from '@angular/core';
import {GamesService} from '../services/games.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-manger-games',
  templateUrl: './manager-games.component.html',
  styleUrls: ['./manager-games.component.css']
})
export class ManagerGamesComponent implements OnInit {



  games: any = [];


  constructor(private gameService: GamesService,) { }

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

  deleteGame(id: string) {
    this.gameService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      );
  }

  public popoverTitle: string = 'Löschen';
  public popoverMessage: string = 'Bist du sicher ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

}
