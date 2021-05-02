import { Injectable } from '@angular/core';
import { AttendanceDetails, StudentDetails } from 'src/app/typings';
import { TeacherApiService } from './teacher-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  constructor(private apiService: TeacherApiService) { }

  getClassAndSectionsInfo() {
    return this.apiService.getClassAndSectionsInfo();
  }
}
