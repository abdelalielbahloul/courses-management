"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HomeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir la route initiale de notre api
        this.router.get('/', (req, res) => {
            res.send('Hello world');
        });
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;
