import  express, { Application }  from "express";
import  homeRoutes  from "./routes/homeRoutes";
import  coursesRoutes  from "./routes/coursesRoutes";
import morgan from "morgan";
import cors from "cors";


class Server {
    public app : Application; //initialiser l'application par l'objet Application de ExpressJs
    constructor() {
        this.app = express(); //initialiser notre app par expressjs
        this.config(); 
        this.routes();
    }

    // cette methode sert a tous les configuration de notre server et les middleware de notre rest api 
    config(): void {
        this.app.set('port', process.env.PORT || 3000); //initialiser le port de notre server nodejs par default 3000
        this.app.use(morgan('dev')); //initialiser morgan
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use( (req, res, next) => { //definir les headers et les methodes accessibles vers notre api
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'origin, X-Requested-With, Content-Type, Accept, Authorization'
            );
            if(req.method === 'OPTIONS'){
                res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, PATCH, POST');
                res.sendStatus(200);

                return res.json({});
            }
        
            next();
        });
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