import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class StudentApiService {

  constructor(private httpService: BaseService) { }

  getStudentDetails(studentId: string) {
    return this.httpService.get(`/user/student/${studentId}`);
  }
  markAttendance(studentId: string) {
    return this.httpService.post(`/attendance/student/`, {});
  }
}
