import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/Game';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  games: any = [];

  constructor(private gameService: GamesService, ) {}

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



  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;


}

