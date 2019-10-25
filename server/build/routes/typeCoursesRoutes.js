"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeCoursesController_1 = require("../controllers/typeCoursesController");
class TypeCoursesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', typeCoursesController_1.typeCoursesController.index);
        this.router.post('/', typeCoursesController_1.typeCoursesController.create);
        this.router.get('/:id', typeCoursesController_1.typeCoursesController.show);
        this.router.put('/:id', typeCoursesController_1.typeCoursesController.update);
        this.router.delete('/:id', typeCoursesController_1.typeCoursesController.delete);
        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}
const typeCoursesRoutes = new TypeCoursesRoutes();
exports.default = typeCoursesRoutes.router;
