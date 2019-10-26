import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers.authorization;
  
  //Try to validate the token and get data
  try {
    const jwtPayload = <any>jwt.verify(token, config.JWT_KEY);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).json({
        message: "Auth failed",
        err: error
    });
    res.end();
    return;
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const newToken = jwt.sign({ 
      email: req.body.email, 
      userId: req.body.id 
    }, 
    config.JWT_KEY, 
    {
    expiresIn: "1h"
  });

  res.status(200).json({
      message: "the token was updated",
      newToken : newToken
  })
  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};