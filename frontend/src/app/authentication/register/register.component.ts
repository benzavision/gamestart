import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Customer} from '../../models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private auth: AuthenticationService) { }
  title = 'GameStart';

  credentials: TokenPayload = {
    id: 0,
    name: "",
    last_name: "",
    email: "",
    avatar: "",
    password: "",
    credit: 0
  };

  ngOnInit() {}

  register() {

  }

}
