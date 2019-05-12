import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent} from './user-home/user-home.component';
import { UserShoppingCartComponent} from './user-shopping-cart/user-shopping-cart.component';
import { LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserContactComponent} from "./user-contact/user-contact.component";

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:UserHomeComponent},
  { path:'', redirectTo: 'contact', pathMatch:'full'},
  {path: 'contact', component:UserContactComponent},
  { path:'', redirectTo: 'cart', pathMatch:'full'},
  {path: 'cart', component:UserShoppingCartComponent},
  { path:'', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  { path:'', redirectTo: 'register', pathMatch:'full'},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


