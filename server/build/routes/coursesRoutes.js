"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coursesController_1 = require("../controllers/coursesController");
const check_auth_1 = require("../middleware/check-auth");
class CoursesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', coursesController_1.coursesController.index);
        this.router.post('/', check_auth_1.checkAuth, coursesController_1.coursesController.create);
        this.router.get('/:id', check_auth_1.checkAuth, coursesController_1.coursesController.show);
        this.router.put('/:id', check_auth_1.checkAuth, coursesController_1.coursesController.update);
        this.router.delete('/:id', check_auth_1.checkAuth, coursesController_1.coursesController.delete);
        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}
const coursesRoutes = new CoursesRoutes();
exports.default = coursesRoutes.router;
