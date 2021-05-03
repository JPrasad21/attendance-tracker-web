import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import { ClassViewComponent } from './class-view/class-view.component';
import { StudentsViewComponent } from './students-view/students-view.component';

@NgModule({
  declarations: [
    ProfileComponent,
    TeacherLayoutComponent,
    TeacherAttendanceComponent,
    ClassViewComponent,
    StudentsViewComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    SharedModule
  ]
})
export class TeacherModule { }
