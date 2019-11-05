"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
exports.checkAuth = (req, res, next) => {
    //Get the jwt token from the head
    const token = req.headers.authorization;
    //Try to validate the token and get data
    try {
        const jwtPayload = jwt.verify(token, config_1.default.JWT_KEY);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (error) {
        //If token is not valid, respond with 401 (unauthorized)
        res.status(401).json({
            message: "Auth failed"
        });
        res.end();
        return;
    }
    next();
};
