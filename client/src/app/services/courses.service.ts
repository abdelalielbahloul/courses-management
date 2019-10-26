import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../models/course";
import { TypeCourse } from '../models/type-course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  courses : Course[] = [];
  
  typeCourses : TypeCourse[] = [];

  apiCourses = "http://localhost:3000";


  constructor( private http: HttpClient) { }

  _getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.apiCourses}/courses`);
  }

  _addCourse(course){
    return this.http.post<Course>(`${this.apiCourses}/courses`, course, this.httpOptions);
  }

  _getTypesCourse(){
    return this.http.get<TypeCourse[]>(`${this.apiCourses}/typeCourses`);
  }

  _deleteCourse(id){
    return this.http.delete(`${this.apiCourses}/courses/${id}`, this.httpOptions);
  }

  
}
