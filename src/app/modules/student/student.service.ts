import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';
import { AttendanceDetails, StudentDetails } from 'src/app/typings';
import { StudentApiService } from './student-api.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  studentDetails: StudentDetails;
  constructor(private apiService: StudentApiService) { }

  getStudentDetails(studentId: string) {
    return this.apiService.getStudentDetails(studentId);
  }
  checkAttendance(studentId: string) {
    return this.apiService.checkAttendance(studentId);
  }
  markAttendance(studentId: AttendanceDetails) {
    return this.apiService.markAttendance(studentId);
  }
}
