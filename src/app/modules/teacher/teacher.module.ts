import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';



@NgModule({
  declarations: [
    ProfileComponent,
    TeacherLayoutComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
