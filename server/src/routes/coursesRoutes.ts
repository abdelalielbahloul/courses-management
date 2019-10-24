import { Router } from "express";

class CoursesRoutes {
    public router : Router = Router();
    constructor() {
        this.config();  
    }

    config(): void {
        //definir les routes de CRUD vers nos courses
        this.router.get('/', (req, res) => {
            res.send('methode GET of /courses');
        });

        this.router.post('/', (req, res) => {
            res.send('get route');
        })

        this.router.get('/:id', (req, res) => {
            const id = req.params.id;
            res.send(`Getting courses : ${id}`);
        })

        // this.router.get('/', (req, res) => {
        //     res.send('get route');
        // })
    }
}

const coursesRoutes = new CoursesRoutes();
export default coursesRoutes.router;