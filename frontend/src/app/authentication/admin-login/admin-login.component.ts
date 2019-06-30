import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Admin} from '../../models/Admin';
import {AdminService} from '../../services/admin.service';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {


  title = 'GameStart';

  msg = '';

  admin: Admin = {
    name: '',
    email: '',
    password: '',

  };



  constructor(
    private adminServise : AdminService,
    private router: Router,
  ) {
  }

  ngOnInit() {

    if (localStorage.getItem('AdminUser')){
      this.router.navigate(['/dashboard']);
    }

  }


  login() {

    this.adminServise.login(this.admin.email, this.admin.password)
      .subscribe(
        res => {
          console.log(res);
          this.admin = res;
          this.adminServise.saveLogin(this.admin);
          this.msg = res["message"];

          if (this.adminServise.getLoginId()){
            this.router.navigate(['/dashboard']);
          }        },
        err => console.error(err)
      );





  }

}
