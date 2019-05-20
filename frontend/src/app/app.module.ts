import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './navigation/header/header.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { GameCardComponent } from './game-list/game-card/game-card.component';
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
import { GamesService } from './services/games.service';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameCardComponent,
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
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType: 'primary'})
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
