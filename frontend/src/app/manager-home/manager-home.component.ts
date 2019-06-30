import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../services/admin.service';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private adminService : AdminService, private router: Router, ) { }

  ngOnInit() {
    this.checkLogin();

  }

  checkLogin(){
    if (!this.adminService.getLoginId()) {
      this.router.navigate(['/auth/admin-login'], );
    }

  }

}
