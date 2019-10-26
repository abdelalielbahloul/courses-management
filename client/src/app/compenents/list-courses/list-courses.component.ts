import { Component, OnInit, HostBinding } from '@angular/core';
import { CoursesService } from "../../services/courses.service";
import { Course } from 'src/app/models/course';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    type: 0
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

  editCourse(id){
    this.courseService._getCourse(id)
      .subscribe( course => this.updatedCourse = course)
    
  }

  searchCourse(){
    this.resultCourses = this.courses.filter( (course) => 
      course.title.toLocaleLowerCase().includes(this.searchText) || course.content.toLocaleLowerCase().includes(this.searchText)
    )
  }

  updateCourse(course){
    this.courseService._updateCourse(course)
      .subscribe( () => {
        this.getCourses();
      })
    
  }

}
