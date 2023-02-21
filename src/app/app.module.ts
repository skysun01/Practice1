import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchComponent } from './Modules/user/module/batch/components/batch.component';
import { CoursesComponent } from './Modules/user/module/courses/components/courses.component';
import { StudentsComponent } from './Modules/user/module/students/students.component';
import { TeacherComponent } from './Modules/user/module/teacher/teacher.component';
import { LoginComponent } from './Pages/login/components/login.component';
import { NavbarComponent } from './Modules/Shared Modules/navbar/components/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BatchComponent,
    CoursesComponent,
    StudentsComponent,
    TeacherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
