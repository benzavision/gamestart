"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gamesController_1 = require("../controllers/gamesController");
var GamesRoutes = /** @class */ (function () {
    function GamesRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    GamesRoutes.prototype.config = function () {
        this.router.get('/', gamesController_1.gamesController.index);
    };
    return GamesRoutes;
}());
var gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
