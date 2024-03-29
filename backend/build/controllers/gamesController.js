"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var GamesController = /** @class */ (function () {
    function GamesController() {
    }
    GamesController.prototype.list = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('SELECT * FROM games')];
                    case 1:
                        games = _a.sent();
                        res.json(games);
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM games WHERE id = ?', [id])];
                    case 1:
                        games = _a.sent();
                        console.log(games.length);
                        if (games.length > 0) {
                            return [2 /*return*/, res.json(games[0])];
                        }
                        else {
                            res.status(404).json({ text: "Spiel nicht gefunden" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.search = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var word, games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        word = req.params.word;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM games WHERE title LIKE ?', '%' + word + '%')];
                    case 1:
                        games = _a.sent();
                        console.log(games.length);
                        if (games.length > 0) {
                            return [2 /*return*/, res.json(games)];
                        }
                        else {
                            res.status(404).json({ text: "kein Spiel nicht gefunden" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.getGenre = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var genre, games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        genre = req.params.genre;
                        return [4 /*yield*/, database_1.default.query('SELECT * FROM games WHERE genre = ?', [genre])];
                    case 1:
                        games = _a.sent();
                        console.log(games.length);
                        if (games.length > 0) {
                            return [2 /*return*/, res.json(games)];
                        }
                        else {
                            res.status(404).json({ text: "Kategorie nicht gefunden" });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.query('INSERT INTO games set ?', [req.body])];
                    case 1:
                        result = _a.sent();
                        res.json({ message: 'Game Saved' });
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, oldGame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        oldGame = req.body;
                        return [4 /*yield*/, database_1.default.query('UPDATE games set ? WHERE id = ?', [oldGame, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Spiel aktualisiert" });
                        return [2 /*return*/];
                }
            });
        });
    };
    GamesController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1.default.query('DELETE FROM games WHERE id = ?', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Spiel gelöscht" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return GamesController;
}());
exports.gamesController = new GamesController();
