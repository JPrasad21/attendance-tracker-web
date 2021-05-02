import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';
import { StudentApiService } from './student-api.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  constructor(private apiService: StudentApiService) { }

  getStudentDetails(studentId: string) {
    return this.apiService.getStudentDetails(studentId);
  }
  markAttendance(studentId: string) {
    return this.apiService.markAttendance(studentId);
  }
}
