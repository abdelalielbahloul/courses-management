import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeCourse } from 'src/app/models/type-course';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  myCourse : Course = {
    title: '',
    content: '',
    type: 3
  }

  courses : Course[] = [];

  typesCourse : TypeCourse[] = [];

  constructor( private courseService: CoursesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTypeCourses();
  }

  persist(){
    this.courseService._addCourse(this.myCourse)
      .subscribe( (course) => {
          this.courses = [ course, ...this.courses ];
      });
      this.reset();
      this.router.navigate(['/']);      
  }

  reset(){
    this.myCourse = {
      title: '',
      content: '',
      type: 3
    }
  }

  getTypeCourses(){
      this.courseService._getTypesCourse()
        .subscribe( res => {
            this.typesCourse = res;
            // console.log(res)
        })
  }

}
