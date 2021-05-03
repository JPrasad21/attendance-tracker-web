import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClassDetails } from 'src/app/typings';
import { TeacherApiService } from './teacher-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  selectedClass$ = new BehaviorSubject<ClassDetails>(null);
  constructor(private apiService: TeacherApiService) { }

  getClassAndSectionsInfo(date: string) {
    return this.apiService.getClassAndSectionsInfo(date);
  }
  getStudentsInfo() {
    return this.apiService.getStudentsInfo(this.selectedClass$.value._id);
  }
}
