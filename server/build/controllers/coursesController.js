"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoursesController {
    /**
     * index show all courses
     */
    index(req, res) {
        res.send('method INDEX inside the coursesController works');
    }
    /**
     * create a new course
     */
    create(req, res) {
        res.send('method CREATE inside the coursesController works');
    }
    /**
     * show one course
     */
    show(req, res) {
        res.send('method SHOW inside the coursesController works');
    }
    /**
     * update courses
     */
    update(req, res) {
        res.send('method update inside the coursesController works');
    }
    /**
     * delete course
     */
    delete(req, res) {
        res.send('method delete inside the coursesController works');
    }
}
exports.coursesController = new CoursesController();
