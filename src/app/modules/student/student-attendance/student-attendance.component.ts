import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { AttendanceDetails } from 'src/app/typings';
import { AuthService } from '../../auth/auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {

  attendanceExist = false;
  constructor(private authService: AuthService, private studentService: StudentService, private toast: SnackbarService) { }

  ngOnInit(): void {
    this.checkAttendance();
  }

  checkAttendance() {
    const student = this.authService.getUserDetails$.value;
    this.studentService.checkAttendance(student._id).subscribe((x: any) => {
      this.attendanceExist = x.data;
    })
  }
  markPresent() {
    const student = this.studentService.studentDetails;
    const attendanceObj: AttendanceDetails = {
      date: new Date(),
      studentId: student._id,
      classId: student.classDetails[0]._id,
      status: 'Present'
    }
    this.studentService.markAttendance(attendanceObj).subscribe((x: any) => {
      this.attendanceExist = x.data;
      this.toast.openSnackBar('Attendance marked for today!')
    })
  }
}
