import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherApiService {

  constructor(private httpService: BaseService) { }

  getClassAndSectionsInfo(date: string) {
    return this.httpService.get(`/class/date/${encodeURIComponent(date)}`);
  }

  getStudentsInfo(classId: string) {
    return this.httpService.get(`/user/classStudents/${classId}`);
  }

}
