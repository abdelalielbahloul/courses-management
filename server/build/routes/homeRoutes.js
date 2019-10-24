"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
class HomeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir la route initiale de notre api
        this.router.get('/', homeController_1.homeController.index);
    }
}
const homeRoutes = new HomeRoutes();
exports.default = homeRoutes.router;
