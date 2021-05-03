import { Component, OnInit } from '@angular/core';
import { ClassDetails } from 'src/app/typings';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.scss']
})
export class TeacherAttendanceComponent implements OnInit {

  selectedClass: ClassDetails;
  constructor(private teacherService: TeacherService) {
    this.teacherService.selectedClass$.subscribe(x => {
      this.selectedClass = x;
    })
  }

  ngOnInit(): void {
  }

}
