import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from "../models/course";
import { TypeCourse } from '../models/type-course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses : Course[] = [];
  typeCourses : TypeCourse[] = [];

  apiCourses = "http://localhost:3000";


  constructor( private http: HttpClient) { }

  _getCourses(){
    return this.http.get<Course[]>(`${this.apiCourses}/courses`);
  }

  _addCourse(course){
    return this.http.post<Course>(`${this.apiCourses}/courses`, course);
  }

  _getTypesCourse(){
    return this.http.get<TypeCourse[]>(`${this.apiCourses}/typeCourses`);
  }
}
