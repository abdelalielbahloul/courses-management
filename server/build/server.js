"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const coursesRoutes_1 = __importDefault(require("./routes/coursesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //initialiser notre app par expressjs
        this.config();
        this.routes();
    }
    // cette methode sert a tous les configuration de notre server
    config() {
        this.app.set('port', process.env.PORT || 3000); //initialiser le port de notre server nodejs par default 3000
    }
    //cete methode sert a definir les routes acceissibles a notre server
    routes() {
        //add les routes disponobles de mon api
        this.app.use('/', homeRoutes_1.default);
        this.app.use('/courses', coursesRoutes_1.default);
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
