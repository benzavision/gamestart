import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { GameCardComponent } from './game-card/game-card.component';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './main/categories/categories.component';
import { SliderComponent } from './main/slider/slider.component';
import { GroupsComponent } from './main/groups/groups.component';
import { FooterComponent } from './footer/footer.component';
import { UserShoppingCartComponent } from './user-shopping-cart/user-shopping-cart.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserContactComponent } from './user-contact/user-contact.component';



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
    UserContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
