"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    /**
     * index
     */
    index(req, res) {
        res.send('Hello world');
    }
}
exports.homeController = new HomeController();
