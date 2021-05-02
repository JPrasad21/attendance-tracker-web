import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';



@NgModule({
  declarations: [
    ProfileComponent,
    StudentLayoutComponent,
    StudentAttendanceComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
