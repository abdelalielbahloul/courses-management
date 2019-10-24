"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CoursesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', (req, res) => {
            res.send('get route');
        });
        this.router.post('/', (req, res) => {
            res.send('get route');
        });
        this.router.get('/:id', (req, res) => {
            res.send('get route');
        });
        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}
const coursesRoutes = new CoursesRoutes();
exports.default = coursesRoutes.router;
