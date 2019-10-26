import { Router } from "express";
import { usersController } from "../controllers/usersController";


class UsersRoutes {
    public router : Router = Router();
    constructor() {
        this.config();  
    }

    config(): void {
        //definir la route initiale de notre api
        this.router.post('/register' ,usersController.register);
        this.router.get('/login', usersController.login);

    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;