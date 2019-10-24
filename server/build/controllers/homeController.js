"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    /**
     * index
     */
    index(req, res) {
        res.json({ message: 'Hello world' });
    }
}
exports.homeController = new HomeController();
