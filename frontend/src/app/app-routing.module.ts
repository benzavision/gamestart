import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent} from './user-home/user-home.component';
import { UserShoppingCartComponent} from './user-shopping-cart/user-shopping-cart.component';
import { LoginComponent} from './authentication/login/login.component';
import { RegisterComponent} from './authentication/register/register.component';
import { UserContactComponent} from "./user-contact/user-contact.component";
import { ManagerHomeComponent} from './manager-home/manager-home.component';
import { ManagerCustomerComponent} from './manager-customer/manager-customer.component';
import { ManagerGamesComponent } from './manager-games/manager-games.component';
import { ManagerAddGameComponent} from './manager-add-game/manager-add-game.component';
import { CategorieListComponent} from './categorie-list/categorie-list.component';
import { ProfileComponent} from './profile/profile.component';
import {SearchListComponent} from './search-list/search-list.component';
import {AdminLoginComponent} from './authentication/admin-login/admin-login.component';


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
  {path: 'register', component:RegisterComponent},
  { path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component:ManagerHomeComponent},
  { path:'', redirectTo: 'customers', pathMatch:'full'},
  {path: 'customers', component:ManagerCustomerComponent},
  { path:'', redirectTo: 'games', pathMatch:'full'},
  {path: 'games', component:ManagerGamesComponent},
  { path:'', redirectTo: 'new-game', pathMatch:'full'},
  {path: 'games/add', component:ManagerAddGameComponent},
  { path:'', redirectTo: 'games/edit/:id', pathMatch:'full'},
  {path: 'games/edit/:id', component:ManagerAddGameComponent},
  { path:'', redirectTo: 'category/:genre', pathMatch:'full'},
  {path: 'category/:genre', component:CategorieListComponent},
  { path:'', redirectTo: 'profile', pathMatch:'full'},
  {path: 'profile', component:ProfileComponent},
  { path:'', redirectTo: 'search/:word', pathMatch:'full'},
  {path: 'search/:word', component:SearchListComponent},
  { path:'', redirectTo: 'auth/admin-login', pathMatch:'full'},
  {path: 'auth/admin-login', component:AdminLoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


