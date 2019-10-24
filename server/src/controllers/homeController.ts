import { Request, Response  } from "express";

class HomeController {
    /**
     * index
     */
    public index(req: Request, res: Response) {
        res.json({ message: 'Hello world' });
    }
}

export const homeController = new HomeController();