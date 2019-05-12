import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

  constructor() {
  }
  sendMessage(http : Http){

    http.post('http://localhost:5000/api/message', {msg: 'hello'});
  }

  ngOnInit() {
  }

}
