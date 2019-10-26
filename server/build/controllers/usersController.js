"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
class UsersController {
    /**
     * rigister users
     */
    register(req, res) {
        bcryptjs_1.default.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                if (req.body.email === undefined || hash === undefined) {
                    return res.status(500).json({
                        message: 'An error has occured!'
                    });
                }
            }
            else {
                const user = {
                    email: req.body.email,
                    password: hash
                };
                const queryString = "INSERT INTO users set ?";
                database_1.default.query(queryString, [user], (err, rows, fields) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            message: err.sqlMessage
                        });
                        res.end();
                        return;
                    }
                    res.status(200).json({
                        message: "register succsseful!"
                    });
                });
            }
        });
    }
    /**
     * login a user
     */
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = "SELECT * FROM users WHERE email = ?";
            yield database_1.default.query(queryString, [req.body.email], (err, rows, field) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({
                        message: "auth failed"
                    });
                    res.end();
                    return;
                }
                bcryptjs_1.default.compare(req.body.password, rows[0].password, (error, result) => {
                    if (error) {
                        return res.status(401).send({
                            message: 'Auth failed'
                        });
                    }
                    if (result) {
                        const token = jsonwebtoken_1.default.sign({
                            email: rows[0].email,
                            userId: rows[0]._id
                        }, config_1.default.JWT_KEY, {
                            expiresIn: '1H'
                        });
                        return res.status(200).json({
                            message: 'Auth successful !',
                            token: token
                        });
                    }
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                });
            });
        });
    }
    /**
     * delete user
     */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const queryString = "SELECT C.id,title,content,name as TypeCourse, created_at ,updated_at FROM courses C INNER JOIN typeCourses T on C.type = T.id WHERE C.id = ?";
            yield database_1.default.query(queryString, [id], (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    res.end();
                    return;
                }
                if (rows.length > 0) {
                    return res.json(rows);
                }
                else {
                    res.sendStatus(404);
                    res.end();
                    return;
                }
            });
        });
    }
}
exports.usersController = new UsersController();
