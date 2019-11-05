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

  searchText = '';
  courses : Course[] = [];

  resultCourses : Course[] = [];

  updatedCourse : Course = {
    title: '',
    content: '',
    typeCourse: ''
  }

  

  constructor( private courseService: CoursesService ) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(){
    this.courseService._getCourses()
      .subscribe( res => {
          this.resultCourses = this.courses = res;
      })
  }

  deleteCourse(id){
    this.courseService._deleteCourse(id)
      .subscribe( () => {
          this.courses = this.courses.filter( course => course.id != id);
          this.getCourses();         
      })
  }

  editCourse(course){
    this.updatedCourse = course;            
  }

  searchCourse(){
    this.resultCourses = this.courses.filter( (course) => 
      course.title.toLocaleLowerCase().includes(this.searchText) || course.content.toLocaleLowerCase().includes(this.searchText)
    )
  }

  updateCourse(course){
    // delete this.updatedCourse.typeCourse;
    this.courseService._updateCourse(course)
      .subscribe( () => {
        this.getCourses();
      })
    
  }

}
