"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
var gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
var customersRoutes_1 = __importDefault(require("./routes/customersRoutes"));
var categoriesRoutes_1 = __importDefault(require("./routes/categoriesRoutes"));
var consolesRoutes_1 = __importDefault(require("./routes/consolesRoutes"));
var adminsRoutes_1 = __importDefault(require("./routes/adminsRoutes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
        this.app.use('/api/admin', adminsRoutes_1.default);
        this.app.use('/api/customers', customersRoutes_1.default);
        this.app.use('/api/categories', categoriesRoutes_1.default);
        this.app.use('/api/consoles', consolesRoutes_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on port', _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
