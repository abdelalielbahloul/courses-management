import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  course : Course[] = [];

  api = "http://localhost:3000";

  constructor( private http: HttpClient) { }

  _getCourses(){
    return this.http.get<Course[]>(`${this.api}/courses`);
  }
}
