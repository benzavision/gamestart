import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { AngularFontAwesomeModule} from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent} from './navigation/header/header.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { SliderComponent } from './main/slider/slider.component';
import { GroupsComponent } from './main/groups/groups.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { UserShoppingCartComponent } from './user-shopping-cart/user-shopping-cart.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { HttpClientModule} from '@angular/common/http';
import { GameListComponent } from './game-list/game-list.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { MangerGamesComponent } from './manger-games/manger-games.component';
import { ManagerHeaderComponent } from './navigation/manager-header/manager-header.component';
import { ManagerAddGameComponent } from './manager-add-game/manager-add-game.component';
import { ManagerCustomerComponent } from './manager-customer/manager-customer.component';

import { GamesService } from './services/games.service';
import { CustomersService} from './services/customers.service';
import { AuthenticationService} from './authentication/authentication.service';
import { AuthGuardService} from './authentication/auth-guard.service';
import { ManagerTopMenuComponent } from './manager-top-menu/manager-top-menu.component';
import { ManagerCustomerListComponent } from './manager-customer-list/manager-customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CategoriesComponent,
    SliderComponent,
    GroupsComponent,
    FooterComponent,
    UserShoppingCartComponent,
    UserHomeComponent,
    LoginComponent,
    RegisterComponent,
    UserContactComponent,
    GameListComponent,
    ManagerHomeComponent,
    MangerGamesComponent,
    ManagerHeaderComponent,
    ManagerAddGameComponent,
    ManagerTopMenuComponent,
    ManagerCustomerComponent,
    ManagerCustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'primary'}),
    FormsModule
  ],
  providers: [
    GamesService,
    CustomersService,
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
