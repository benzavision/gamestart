import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {Customer} from '../../models/Customer';
import {Admin} from '../../models/Admin';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.css']
})
export class ManagerHeaderComponent implements OnInit {

  constructor(private adminServices : AdminService) { }
  title = 'GameStart';
  word: string;
  login: boolean;

  loggedinAdmin: Admin = {
    name : ''};


  ngOnInit() {
    this.getLoggedin();
  }


  logout(){
    this.adminServices.logout();
    window.location.reload();
    this.login = false;
  }

  getLoggedin(){
    if (localStorage.getItem('loginAdmin')){
      this.login = true;

      console.log(this.adminServices.getLoginId() );


      this.adminServices.getLogin()
        .subscribe(
          res => {

            console.log(res);
            this.loggedinAdmin = res;
            this.login = true;
          },
          err => console.log(err)
        );
      console.log(this.loggedinAdmin.name );
    }

  }

}
