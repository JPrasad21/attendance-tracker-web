import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: BaseService) { }

  addData() {
    return this.httpService.post('/seeder', {});
  }
}
