import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from './compenents/list-courses/list-courses.component';
import { AddCoursesComponent } from './compenents/add-courses/add-courses.component';


const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: ListCoursesComponent},
  { path: 'courses/add', component: AddCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
