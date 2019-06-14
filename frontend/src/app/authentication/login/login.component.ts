import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  credentials: TokenPayload = {
    id: 0,
    name: '',
    last_name: '',
    email: '',
    password: '',
    avatar: '',
    credit: 0
}

constructor(private auth: AuthenticationService, private router: Router) {

  }

  title = 'GameStart';

  login() {

  }

  ngOnInit(){
  }

}
