import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCoursesComponent } from './compenents/list-courses/list-courses.component';
import { AddCoursesComponent } from './compenents/add-courses/add-courses.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { EditCoursesComponent } from './compenents/edit-courses/edit-courses.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'courses', component: ListCoursesComponent},
  { path: 'courses/add', component: AddCoursesComponent},
  { path: 'courses/edit', component: EditCoursesComponent},
  { path: '**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
