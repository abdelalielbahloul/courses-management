import { Router } from "express";

class HomeRoutes {
    public router : Router = Router();
    constructor() {
        this.config();  
    }

    config(): void {
        //definir la route initiale de notre api
        this.router.get('/', (req, res) => {
            res.send('Hello its me');
        })
    }
}

const homeRoutes = new HomeRoutes();
export default homeRoutes.router;