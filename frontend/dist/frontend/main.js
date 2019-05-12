(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _user_shopping_cart_user_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-shopping-cart/user-shopping-cart.component */ "./src/app/user-shopping-cart/user-shopping-cart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");







var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_3__["UserHomeComponent"] },
    { path: '', redirectTo: 'cart', pathMatch: 'full' },
    { path: 'cart', component: _user_shopping_cart_user_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["UserShoppingCartComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GameStart';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/categories/categories.component */ "./src/app/main/categories/categories.component.ts");
/* harmony import */ var _main_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/slider/slider.component */ "./src/app/main/slider/slider.component.ts");
/* harmony import */ var _main_groups_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/groups/groups.component */ "./src/app/main/groups/groups.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_shopping_cart_user_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-shopping-cart/user-shopping-cart.component */ "./src/app/user-shopping-cart/user-shopping-cart.component.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-home/user-home.component */ "./src/app/user-home/user-home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_9__["GameCardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _main_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"],
                _main_slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
                _main_groups_groups_component__WEBPACK_IMPORTED_MODULE_13__["GroupsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _user_shopping_cart_user_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["UserShoppingCartComponent"],
                _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_16__["UserHomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer section-footer bg2 footer-bottom\">\n  <div class=\"container\">\n    <section class=\"footer-bottom row\">\n      <div class=\"col-sm-6\">\n        <p> Medieninformatik 4</p>\n      </div>\n      <div class=\"col-sm-6\">\n        <p class=\"text-sm-right\">\n          HSB 2019\n        </p>\n      </div>\n    </section> <!-- //footer-top -->\n  </div><!-- //container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/game-card/game-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/game-card/game-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtY2FyZC9nYW1lLWNhcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/game-card/game-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-card/game-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure class=\"card card-product\">\n    <div class=\"img-wrap\"><img src=\"assets/images/items/fifa19.jpg\"></div>\n    <figcaption class=\"info-wrap\">\n      <h4 class=\"title\">FIFA 2019</h4>\n      <h5 class=\"desc\">PS4</h5>\n      <p class=\"desc\">EA Sports</p>\n      <div class=\"rating-wrap\">\n\n        <div class=\"label-rating\">Release Datum: 19.09.2018</div>\n      </div> <!-- rating-wrap.// -->\n    </figcaption>\n    <div class=\"bottom-wrap\">\n      <a href=\"\" class=\"btn btn-sm btn-primary float-right ml-3\">Kaufen</a>\n      <a href=\"\" class=\"btn btn-sm btn-secondary float-right\">Mieten</a>\n      <div class=\"price-wrap h5\">\n        <span class=\"price-new\">1280 €</span> <del class=\"price-old\">1980 €</del>\n      </div> <!-- price-wrap.// -->\n    </div> <!-- bottom-wrap.// -->\n  </figure>\n"

/***/ }),

/***/ "./src/app/game-card/game-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-card/game-card.component.ts ***!
  \**************************************************/
/*! exports provided: GameCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardComponent", function() { return GameCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameCardComponent = /** @class */ (function () {
    function GameCardComponent() {
    }
    GameCardComponent.prototype.ngOnInit = function () {
    };
    GameCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-card',
            template: __webpack_require__(/*! ./game-card.component.html */ "./src/app/game-card/game-card.component.html"),
            styles: [__webpack_require__(/*! ./game-card.component.css */ "./src/app/game-card/game-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameCardComponent);
    return GameCardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"section-header\">\n\n\n  <section class=\"header-main shadow-sm\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-3 col-sm-4\">\n          <div class=\"brand-wrap\">\n            <h2 routerLink=\"/home\">{{ title }}</h2>\n          </div> <!-- brand-wrap.// -->\n        </div>\n        <div class=\"col-lg-4 col-xl-5 col-sm-8\">\n          <form action=\"#\" class=\"search-wrap\">\n            <div class=\"input-group w-100\">\n              <input type=\"text\" class=\"form-control\" style=\"width:55%;\" placeholder=\"Suchen...\">\n              <select class=\"custom-select\"  name=\"category_name\">\n                <option value=\"codex\">PS4</option>\n                <option value=\"comments\">XBOX</option>\n                <option value=\"comments\">SWITCH</option>\n              </select>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-primary\" type=\"submit\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </div>\n            </div>\n          </form> <!-- search-wrap .end// -->\n        </div> <!-- col.// -->\n        <div class=\"col-lg-5 col-xl-4 col-sm-12\">\n          <div class=\"widgets-wrap float-right\">\n            <a routerLink=\"/cart\" routerLinkActive=\"active\" class=\"widget-header mr-3\">\n              <div class=\"icontext\">\n                <div class=\"icon-wrap\"><i class=\"icon-sm round border fa-2x fa fa-shopping-cart\"></i></div>\n                <div class=\"text-wrap\">\n                  <span class=\"small badge badge-danger\">0</span>\n                  <div>Cart</div>\n                </div>\n              </div>\n            </a>\n\n            <div ngbDropdown placement=\"bottom-left\" autoClose=\"outside\" class=\"widget-header dropdown\">\n              <a routerLink=\"/login\" data-toggle=\"dropdown\" data-offset=\"20,10\">\n                <div class=\"icontext\">\n                  <div class=\"icon-wrap\"><i class=\"icon-sm round border fa-2x fa fa-user\"></i></div>\n                  <div class=\"text-wrap\">\n                    <small>Login</small>\n\n                    <div>Mein Konto <i ngbDropdownToggle></i> </div>\n                  </div>\n                </div>\n              </a>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownForm1\" class=\"dropdown-menu dropdown-menu-right\">\n                <form class=\"px-4 py-3\">\n                  <div class=\"form-group\">\n                    <label>Email Addresse</label>\n                    <input type=\"email\" class=\"form-control\" placeholder=\"email@example.com\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Passwort</label>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Passwort\">\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                </form>\n                <hr class=\"dropdown-divider\">\n                <a ngbDropdownItem class=\"dropdown-item\" href=\"#\">Registrieren</a>\n              </div> <!--  dropdown-menu .// -->\n            </div>  <!-- widget-header .// -->\n          </div> <!-- widgets-wrap.// -->\n        </div> <!-- col.// -->\n      </div> <!-- row.// -->\n    </div> <!-- container.// -->\n  </section> <!-- header-main .// -->\n</header> <!-- section-header.// -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'GameStart';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBSUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center section-main\">\n<form class=\"form-signin\">\n  <h2 routerLink=\"/home\">{{ title }}</h2>\n  <h1 class=\"h3 mt-5 mb-3 font-weight-normal\">Login</h1>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Passwort</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Passwort\" required>\n\n  <button class=\"btn btn-lg btn-primary btn-block mt-3 mb-3\" type=\"submit\">Login</button>\n  <a routerLink=\"/register\" class=\"\">Registrieren</a>\n\n\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\n</form>\n</body>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = 'GameStart';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/categories/categories.component.css":
/*!**********************************************************!*\
  !*** ./src/app/main/categories/categories.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/categories/categories.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/categories/categories.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <header class=\"card-header bg-secondary white\">\n    <i class=\"icon-menu\"></i> Categories\n  </header>\n  <ul class=\"menu-category\">\n    <li> <a href=\"#\">Food &amp Beverage </a></li>\n    <li> <a href=\"#\">Home Equipments </a></li>\n    <li> <a href=\"#\">Machinery Items </a></li>\n    <li> <a href=\"#\">Toys & Hobbies  </a></li>\n    <li> <a href=\"#\">Consumer Electronics  </a></li>\n    <li> <a href=\"#\">Beauty & Personal Care  </a></li>\n    <li class=\"has-submenu\"> <a href=\"#\">More category  <i class=\"icon-arrow-right pull-right\"></i></a>\n      <ul class=\"submenu\">\n        <li> <a href=\"#\">Food &amp Beverage </a></li>\n        <li> <a href=\"#\">Home Equipments </a></li>\n        <li> <a href=\"#\">Machinery Items </a></li>\n        <li> <a href=\"#\">Toys & Hobbies  </a></li>\n        <li> <a href=\"#\">Consumer Electronics  </a></li>\n        <li> <a href=\"#\">Home & Garden  </a></li>\n        <li> <a href=\"#\">Beauty & Personal Care  </a></li>\n      </ul>\n    </li>\n  </ul>\n</div> <!-- card.// -->\n"

/***/ }),

/***/ "./src/app/main/categories/categories.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/categories/categories.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/main/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/main/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/main/groups/groups.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/groups/groups.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/groups/groups.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/groups/groups.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-white h-100 d-flex flex-column\">\n  <div class=\"p-3 flex-grow-1\">\n    <h5>PS4</h5>\n    <p>50</p>\n    <a href=\"#\" class=\"btn btn-sm btn-primary round\">View more</a>\n  </div>\n  <div class=\"p-3 bg flex-grow-1\">\n    <h4>XBOX</h4>\n    <p>20</p>\n    <a href=\"#\" class=\"btn btn-sm btn-primary round\">View more</a>\n  </div>\n  <div class=\"p-3 flex-grow-1\">\n    <h4>SWITCH</h4>\n    <p>100</p>\n    <a href=\"#\" class=\"btn btn-sm btn-primary round\">View more</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/groups/groups.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/groups/groups.component.ts ***!
  \*************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/main/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/main/groups/groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"row\">\n      <aside class=\"col-md-3\">\n        <app-categories></app-categories>\n      </aside> <!-- col.// -->\n      <div class=\"col-md-6\">\n\n        <app-slider></app-slider>\n\n      </div> <!-- col.// -->\n      <aside class=\"col-md-3\">\n\n        <app-groups></app-groups>\n\n      </aside>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/slider/slider.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/slider/slider.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/slider/slider.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/slider/slider.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <!-- ================= main slide ================= -->\n    <ngb-carousel *ngIf=\"images\">\n      <ng-template ngbSlide>\n        <img src=\"assets/images/banners/slide1.jpg\" alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <h3>First slide label</h3>\n          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/images/banners/slide2.jpg\" alt=\"Random second slide\">\n        <div class=\"carousel-caption\">\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/images/banners/slide3.jpg\" alt=\"Random third slide\">\n        <div class=\"carousel-caption\">\n          <h3>Third slide label</h3>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n    <!-- ============== main slidesow .end // ============= -->\n  </div> <!-- card-body .// -->\n</div> <!-- card.// -->\n"

/***/ }),

/***/ "./src/app/main/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/main/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/main/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n\n.form-signin .checkbox {\n  font-weight: 400;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBSUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n<form class=\"form-signin\">\n  <h2 routerLink=\"/home\">{{ title }}</h2>\n  <h1 class=\"h3 mt-5 mb-3 font-weight-normal\">Registrieren</h1>\n  <label for=\"inputVorname\" class=\"sr-only\">Vorname</label>\n  <input type=\"text\" id=\"inputVorname\" class=\"form-control\" placeholder=\"Vorname\" required autofocus>\n  <label for=\"inputName\" class=\"sr-only\">Name</label>\n  <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"Name\" required autofocus>\n  <label for=\"inputEmail\" class=\"sr-only\">Email addresse</label>\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email addresse\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n  <label for=\"inputStrasse\" class=\"sr-only\">Straße</label>\n  <input type=\"text\" id=\"inputStrasse\" class=\"form-control mt-3\" placeholder=\"Straße\" required autofocus>\n  <label for=\"inputPlz\" class=\"sr-only\">PLZ</label>\n  <input type=\"number\" id=\"inputPlz\" class=\"form-control\" placeholder=\"PLZ\" required autofocus>\n\n  <button class=\"btn btn-lg btn-primary btn-block mt-3 mb-3\" type=\"submit\">Registrieren</button>\n  <a routerLink=\"/login\" class=\"\">Login</a>\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\n</form>\n</body>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.title = 'GameStart';
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-home/user-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-home/user-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItaG9tZS91c2VyLWhvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-home/user-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-home/user-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"section-main bg padding-top-sm\">\n  <div class=\"container\">\n    <app-main></app-main>\n  </div>\n</section>\n\n<section class=\"section-content padding-y bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <app-game-card></app-game-card>\n      </div>\n      <div class=\"col-md-4\">\n        <app-game-card></app-game-card>\n      </div>\n      <div class=\"col-md-4\">\n        <app-game-card></app-game-card>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/user-home/user-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/user-home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/user-home/user-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/user-shopping-cart/user-shopping-cart.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/user-shopping-cart/user-shopping-cart.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItc2hvcHBpbmctY2FydC91c2VyLXNob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-shopping-cart/user-shopping-cart.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-shopping-cart/user-shopping-cart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- ========================= SECTION CONTENT ========================= -->\n<section class=\"section-content bg padding-y border-top\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <main class=\"col-sm-9\">\n\n        <div class=\"card\">\n          <table class=\"table table-hover shopping-cart-wrap\">\n            <thead class=\"text-muted\">\n            <tr>\n              <th scope=\"col\">Product</th>\n              <th scope=\"col\" width=\"120\">Quantity</th>\n              <th scope=\"col\" width=\"120\">Price</th>\n              <th scope=\"col\" class=\"text-right\" width=\"200\">Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                <figure class=\"media\">\n                  <div class=\"img-wrap\"><img src=\"assets/images/items/1.jpg\" class=\"img-thumbnail img-sm\"></div>\n                  <figcaption class=\"media-body\">\n                    <h6 class=\"title text-truncate\">Product name goes here </h6>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Size: </dt>\n                      <dd>XXL</dd>\n                    </dl>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Color: </dt>\n                      <dd>Orange color</dd>\n                    </dl>\n                  </figcaption>\n                </figure>\n              </td>\n              <td>\n                <select class=\"form-control\">\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                </select>\n              </td>\n              <td>\n                <div class=\"price-wrap\">\n                  <var class=\"price\">USD 145</var>\n                  <small class=\"text-muted\">(USD5 each)</small>\n                </div> <!-- price-wrap .// -->\n              </td>\n              <td class=\"text-right\">\n                <a data-original-title=\"Save to Wishlist\" title=\"\" href=\"\" class=\"btn btn-outline-success\" data-toggle=\"tooltip\"> <i class=\"fa fa-heart\"></i></a>\n                <a href=\"\" class=\"btn btn-outline-danger\"> × Remove</a>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <figure class=\"media\">\n                  <div class=\"img-wrap\"><img src=\"assets/images/items/2.jpg\" class=\"img-thumbnail img-sm\"></div>\n                  <figcaption class=\"media-body\">\n                    <h6 class=\"title text-truncate\">Product name goes here </h6>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Size: </dt>\n                      <dd>XXL</dd>\n                    </dl>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Color: </dt>\n                      <dd>Orange color</dd>\n                    </dl>\n                  </figcaption>\n                </figure>\n              </td>\n              <td>\n                <select class=\"form-control\">\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                </select>\n              </td>\n              <td>\n                <div class=\"price-wrap\">\n                  <var class=\"price\">USD 35</var>\n                  <small class=\"text-muted\">(USD10 each)</small>\n                </div> <!-- price-wrap .// -->\n              </td>\n              <td class=\"text-right\">\n                <a data-original-title=\"Save to Wishlist\" title=\"\" href=\"\" class=\"btn btn-outline-success\" data-toggle=\"tooltip\"> <i class=\"fa fa-heart\"></i></a>\n                <a href=\"\" class=\"btn btn-outline-danger btn-round\"> × Remove</a>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <figure class=\"media\">\n                  <div class=\"img-wrap\"><img src=\"assets/images/items/3.jpg\" class=\"img-thumbnail img-sm\"></div>\n                  <figcaption class=\"media-body\">\n                    <h6 class=\"title text-truncate\">Product name goes here </h6>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Size: </dt>\n                      <dd>XXL</dd>\n                    </dl>\n                    <dl class=\"dlist-inline small\">\n                      <dt>Color: </dt>\n                      <dd>Orange color</dd>\n                    </dl>\n                  </figcaption>\n                </figure>\n              </td>\n              <td>\n                <select class=\"form-control\">\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                </select>\n              </td>\n              <td>\n                <div class=\"price-wrap\">\n                  <var class=\"price\">USD 45</var>\n                  <small class=\"text-muted\">(USD15 each)</small>\n                </div> <!-- price-wrap .// -->\n              </td>\n              <td class=\"text-right\">\n                <a data-original-title=\"Save to Wishlist\" title=\"\" href=\"\" class=\"btn btn-outline-success\" data-toggle=\"tooltip\"> <i class=\"fa fa-heart\"></i></a>\n                <a href=\"\" class=\"btn btn-outline-danger btn-round\"> × Remove</a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div> <!-- card.// -->\n\n      </main> <!-- col.// -->\n      <aside class=\"col-sm-3\">\n        <p class=\"alert alert-success\">Add USD 5.00 of eligible items to your order to qualify for FREE Shipping. </p>\n        <dl class=\"dlist-align\">\n          <dt>Total price: </dt>\n          <dd class=\"text-right\">USD 568</dd>\n        </dl>\n        <dl class=\"dlist-align\">\n          <dt>Discount:</dt>\n          <dd class=\"text-right\">USD 658</dd>\n        </dl>\n        <dl class=\"dlist-align h4\">\n          <dt>Total:</dt>\n          <dd class=\"text-right\"><strong>USD 1,650</strong></dd>\n        </dl>\n        <hr>\n        <figure class=\"itemside mb-3\">\n          <aside class=\"aside\"><img src=\"assets/images/icons/pay-visa.png\"></aside>\n          <div class=\"text-wrap small text-muted\">\n            Pay 84.78 AED ( Save 14.97 AED )\n            By using ADCB Cards\n          </div>\n        </figure>\n        <figure class=\"itemside mb-3\">\n          <aside class=\"aside\"> <img src=\"assets/images/icons/pay-mastercard.png\"> </aside>\n          <div class=\"text-wrap small text-muted\">\n            Pay by MasterCard and Save 40%. <br>\n            Lorem ipsum dolor\n          </div>\n        </figure>\n\n      </aside> <!-- col.// -->\n    </div>\n\n  </div> <!-- container .//  -->\n</section>\n<!-- ========================= SECTION CONTENT END// ========================= -->\n<app-footer></app-footer>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/user-shopping-cart/user-shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-shopping-cart/user-shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: UserShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShoppingCartComponent", function() { return UserShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserShoppingCartComponent = /** @class */ (function () {
    function UserShoppingCartComponent() {
    }
    UserShoppingCartComponent.prototype.ngOnInit = function () {
    };
    UserShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-shopping-cart',
            template: __webpack_require__(/*! ./user-shopping-cart.component.html */ "./src/app/user-shopping-cart/user-shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./user-shopping-cart.component.css */ "./src/app/user-shopping-cart/user-shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserShoppingCartComponent);
    return UserShoppingCartComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hs-bremen/Desktop/DB/Dev/gamestart/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map