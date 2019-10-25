import { Router } from "express";
import { typeCoursesController } from "../controllers/typeCoursesController";

class TypeCoursesRoutes {
    public router : Router = Router();
    constructor() {
        this.config();  
    }

    config(): void {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', typeCoursesController.index);

        this.router.post('/', typeCoursesController.create);

        this.router.get('/:id', typeCoursesController.show);

        this.router.put('/:id', typeCoursesController.update);

        this.router.delete('/:id', typeCoursesController.delete);



        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}

const typeCoursesRoutes = new TypeCoursesRoutes();
export default typeCoursesRoutes.router;