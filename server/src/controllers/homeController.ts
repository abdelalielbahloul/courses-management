import { Request, Response  } from "express";

class HomeController {
    /**
     * index
     */
    public index(req: Request, res: Response) {
        res.send('Hello world');
    }
}

export const homeController = new HomeController();