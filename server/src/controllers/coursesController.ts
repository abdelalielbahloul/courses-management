import { Request, Response  } from "express";

class CoursesController {
    /**
     * index show all courses
     */
    public index(req: Request, res: Response) {
        res.send('method INDEX inside the coursesController works');
    }

    /**
     * create a new course
     */
    public create(req: Request, res: Response) {
        res.send('method CREATE inside the coursesController works');
    }

    /**
     * show one course 
     */
    public show(req: Request, res: Response) {
        res.send('method SHOW inside the coursesController works')
    }

    /**
     * update courses
     */
    public update(req: Request, res: Response) {
        res.send('method update inside the coursesController works')
    }

    /**
     * delete course
     */
    public delete(req: Request, res: Response) {
        res.send('method delete inside the coursesController works')
    }
}

export const coursesController = new CoursesController();