import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/typings';
import { AuthService } from '../../auth/auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  studentDetails: StudentDetails;
  currentMonth = new Date().getMonth();
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor(private authService: AuthService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  getStudentDetails() {
    const student = this.authService.getUserDetails$.value;
    this.studentService.getStudentDetails(student._id).subscribe((x: any) => {
      this.studentDetails = x.data;
      this.studentService.studentDetails = this.studentDetails;
    })
  }
}
