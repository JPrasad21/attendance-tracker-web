import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherApiService {

  constructor(private httpService: BaseService) { }

  getClassAndSectionsInfo() {
    return this.httpService.get(`/class/`);
  }

}
