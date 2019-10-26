"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir la route initiale de notre api
        this.router.post('/register', usersController_1.usersController.register);
        this.router.get('/login', usersController_1.usersController.login);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
