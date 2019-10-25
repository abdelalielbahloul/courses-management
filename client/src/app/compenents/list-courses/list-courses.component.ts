import { Component, OnInit, HostBinding } from '@angular/core';
import { CoursesService } from "../../services/courses.service";
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  // @HostBinding('class') classes = 'card'; 

  courses : Course[] = [];

  constructor( private courseService: CoursesService ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this.courseService._getCourses()
      .subscribe( res => {
          this.courses = res;
      })
  }

  deleteCourse(id){
    this.courseService._deleteCourse(id)
      .subscribe( res => {
          this.courses = this.courses.filter( course => course.id != id)
      })
  }

}
