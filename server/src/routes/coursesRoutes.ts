import { Router } from "express";
import { coursesController } from "../controllers/coursesController";
import { checkAuth } from "../middleware/check-auth";

class CoursesRoutes {
    public router : Router = Router();
    constructor() {
        this.config();  
    }

    config(): void {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', coursesController.index);

        this.router.post('/', checkAuth,coursesController.create);

        this.router.get('/:id', checkAuth,coursesController.show);

        this.router.put('/:id', checkAuth,coursesController.update);

        this.router.delete('/:id', checkAuth,coursesController.delete);



        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}

const coursesRoutes = new CoursesRoutes();
export default coursesRoutes.router;