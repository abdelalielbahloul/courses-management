"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const coursesRoutes_1 = __importDefault(require("./routes/coursesRoutes"));
const typeCoursesRoutes_1 = __importDefault(require("./routes/typeCoursesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default(); //initialiser notre app par expressjs
        this.config();
        this.routes();
    }
    // cette methode sert a tous les configuration de notre server et les middleware de notre rest api 
    config() {
        this.app.set('port', process.env.PORT || 3000); //initialiser le port de notre server nodejs par default 3000
        this.app.use(morgan_1.default('dev')); //initialiser morgan
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, PATCH, POST');
                res.sendStatus(200);
                return res.json({});
            }
            next();
        });
    }
    //cete methode sert a definir les routes acceissibles a notre server
    routes() {
        //add les routes disponobles de mon api
        this.app.use('/', homeRoutes_1.default);
        this.app.use('/courses', coursesRoutes_1.default);
        this.app.use('/typecourses', typeCoursesRoutes_1.default);
    }
    // demarrer le server 
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
