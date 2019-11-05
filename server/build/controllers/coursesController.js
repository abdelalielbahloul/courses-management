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
class CoursesController {
    /**
     * index show all courses
     */
    index(req, res) {
        const queryString = "SELECT C.id,title,content,typeCourse, created_at ,updated_at FROM courses C";
        database_1.default.query(queryString, (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                res.end();
                return;
            }
            res.json(rows);
        });
    }
    /**
     * create a new course
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.title === '' || req.body.content === '' || req.body.type == '') {
                res.sendStatus(500);
                res.end();
                return;
            }
            const queryString = "INSERT INTO courses set ?";
            yield database_1.default.query(queryString, [req.body], (err, rows, field) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    res.end();
                    return;
                }
                res.json({
                    message: 'Course created successfuly'
                });
            });
        });
    }
    /**
     * show one course
     */
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const queryString = "SELECT C.id,title,content,name as TypeCourse, created_at ,updated_at FROM courses C INNER JOIN typeCourses T on C.typeCourse = T.id WHERE C.id = ?";
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
    /**
     * update courses
     */
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const updatedCourse = req.body;
            const queryString = "UPDATE courses SET ? WHERE id = ?";
            yield database_1.default.query(queryString, [updatedCourse, id], (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    res.end();
                    return;
                }
            });
            if (database_1.default.threadId != null) {
                res.json({
                    message: "Updated successufuly!"
                });
            }
            else {
                res.sendStatus(500);
                res.end();
                return;
            }
        });
    }
    /**
     * delete course
     */
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const queryString = "DELETE FROM courses WHERE id = ?";
            yield database_1.default.query(queryString, [id], (err, rows, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    res.end();
                    return;
                }
            });
            res.status(200).json({ msg: 'course was deleted' });
            // if(connection.threadId != null){
            //     res.sendStatus(200);
            // }else{
            //     res.sendStatus(404);
            //     res.end();
            //     return
            // }
        });
    }
}
exports.coursesController = new CoursesController();
