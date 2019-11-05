import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoursesComponent } from './compenents/list-courses/list-courses.component';
import { AddCoursesComponent } from './compenents/add-courses/add-courses.component';
import { NavBarComponent } from './compenents/nav-bar/nav-bar.component';
import { CoursesService } from "./services/courses.service";
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { EditCoursesComponent } from './compenents/edit-courses/edit-courses.component';
import { NotFoundComponent } from './compenents/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    AddCoursesComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    EditCoursesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
