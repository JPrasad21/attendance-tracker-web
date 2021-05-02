import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';
import { AttendanceDetails } from 'src/app/typings';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {

  constructor(private httpService: BaseService) { }

  getStudentDetails(studentId: string) {
    return this.httpService.get(`/user/student/${studentId}`);
  }
  checkAttendance(studentId: string) {
    return this.httpService.get(`/attendance/check/${studentId}`);
  }
  markAttendance(attendanceObj: AttendanceDetails) {
    return this.httpService.post(`/attendance/`, attendanceObj);
  }
}
