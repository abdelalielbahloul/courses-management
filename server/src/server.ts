import  express, { Application }  from "express";
import  homeRoutes  from "./routes/homeRoutes";
import  coursesRoutes  from "./routes/coursesRoutes";


class Server {
    public app : Application;
    constructor() {
        this.app = express(); //initialiser notre app par expressjs
        this.config(); 
        this.routes();
    }

    // cette methode sert a tous les configuration de notre server
    config(): void {
        this.app.set('port', process.env.PORT || 3000); //initialiser le port de notre server nodejs par default 3000
    }

    //cete methode sert a definir les routes acceissibles a notre server
    routes(): void {
        //add les routes disponobles de mon api
        this.app.use('/', homeRoutes);
        this.app.use('/courses', coursesRoutes);
    }

    // demarrer le server 
    start(): void {
        this.app.listen(this.app.get('port'), () => { //get le port de notre app definit dans config()
            console.log(`Server running on port ${ this.app.get('port') }`);
            
        }); 
    }
}

const server = new Server();
server.start();