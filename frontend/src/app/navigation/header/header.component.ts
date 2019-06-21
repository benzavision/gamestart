import { Component, OnInit } from '@angular/core';
import {ConsolesService} from '../../services/consoles.service';
import {Console} from '../../models/Console';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private consolesService : ConsolesService,) { }
  title = 'GameStart';
  consoles: any = [];

  ngOnInit() {
    this.getConsoles();
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

}
