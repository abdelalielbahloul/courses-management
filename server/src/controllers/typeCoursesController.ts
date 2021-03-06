import { Request, Response  } from "express";
import connection from "../database";

class TypeCoursesController {
    /**
     * index show all courses
     */
    public index(req: Request, res: Response) {

        const queryString = "SELECT id, name as typeCourse FROM typeCourses";
        
        connection.query(queryString, (err, rows, fields) => {
            if(err){
                console.log(err);
                
                res.sendStatus(500);
                res.end();
                return
            }
            res.json(rows);            
        })
    }
    /**
     * create a new course
     */
    public async create(req: Request, res: Response): Promise<void> {
        const queryString = "INSERT INTO typeCourses set ?";
        
        await connection.query(queryString, [req.body], (err, rows, field) => {
            if(err){
                console.log(err);
                
                res.sendStatus(500);
                res.end();
                return
            }
            res.json({
                message: 'Course created successfuly'
            });            
        })
    }
    /**
     * show one course 
     */
    public async show(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const queryString = "SELECT id,name as TypeCourse FROM typeCourses WHERE id = ?";

        await connection.query(queryString, [id], (err, rows, fields) => {
            if(err){
                console.log(err);
                
                res.sendStatus(500)
                res.end();
                return
            }
            if(rows.length > 0){
                return res.json(rows);
            }else{
                res.sendStatus(404);
                res.end();
                return
            }
        })
    }
    /**
     * update courses
     */
    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const updatedCourse = req.body;
        const queryString = "UPDATE typeCourses SET ? WHERE id = ?";
        await connection.query(queryString, [updatedCourse, id], (err, rows, fields) => {
            if(err){
                console.log(err);
                
                res.sendStatus(500)
                res.end();
                return
            }
            
        })
        if(connection.threadId != null){
            res.sendStatus(200);
        }else{
            res.sendStatus(500);
            res.end();
            return
        }
    }
    /**
     * delete course
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const queryString = "DELETE FROM typeCourses WHERE id = ?";
        await connection.query(queryString, [id], (err, rows, fields) => {
            if(err){
                console.log(err);
                
                res.sendStatus(500)
                res.end();
                return
            }
            
        })
        if(connection.threadId != null){
            res.sendStatus(200);
        }else{
            res.sendStatus(500);
            res.end();
            return
        }
        
        
    }
}

export const typeCoursesController = new TypeCoursesController();