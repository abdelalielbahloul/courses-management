import { Request, Response  } from "express";
import connection from "../database";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";
import config from "../config";

class UsersController {
    /**
     * rigister users
     */
    public register(req: Request, res: Response) {
        bcryptjs.hash(req.body.password, 10, (err, hash) => {
            if(err){
                if(req.body.email === undefined || hash === undefined){
                    return res.status(500).json({
                        message : 'An error has occured!'
                    })
                }
               
            }else{
                const user = {
                    email: req.body.email,
                    password: hash
                }

                const queryString = "INSERT INTO users set ?";
        
                connection.query(queryString, [user], (err, rows, fields) => {
                    if(err){
                        console.log(err);
                        
                        res.status(500).json({ 
                            message: err.sqlMessage
                        });
                        res.end();
                        return
                    }
                    res.status(200).json({
                        message: "register succsseful!"
                    });            
                })
               
            }
        })
        
    }
    /**
     * login a user 
     */
    public async login(req: Request, res: Response): Promise<void> {

        const queryString = "SELECT * FROM users WHERE email = ?";
        
        
        await connection.query(queryString, [req.body.email], (err, rows, field) => {
            if(err){
                console.log(err);
                
                res.status(500).json({
                    message: "auth failed"
                });
                res.end();
                return
            }
            
            bcryptjs.compare(req.body.password, rows[0].password, (error, result) => {
                if(error){
                    return res.status(401).send({
                        message: 'Auth failed'
                    })
                }
                if(result){
                    const token = JWT.sign({
                        email: rows[0].email,
                        userId: rows[0]._id
                    },
                    config.JWT_KEY,
                    {
                        expiresIn: '1H'
                    });

                    return res.status(200).json({
                        message: 'Auth successful !',
                        token: token
                    })
                }
                return res.status(401).json({
                    message: 'Auth failed'
                })
            })         
        })
       
        
        
       
        
        
    }
    /**
     * delete user  
     */
    public async delete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const queryString = "SELECT C.id,title,content,name as TypeCourse, created_at ,updated_at FROM courses C INNER JOIN typeCourses T on C.type = T.id WHERE C.id = ?";

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
   
}

export const usersController = new UsersController();