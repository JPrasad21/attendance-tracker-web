import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../core/api/api.service';

@Component({
  selector: 'app-seeder',
  templateUrl: './seeder.component.html',
  styleUrls: ['./seeder.component.scss']
})
export class SeederComponent implements OnInit {

  result = "";
  loading = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addData() {
    this.result = "";
    this.loading = true;
    this.apiService.addData().pipe(finalize(() => {
      this.loading = false;
    })).subscribe(res => {
      this.result = "Data added successfully. Login to continue"
    }, err => {
      this.result = "Data already exists in database."
    })
  }
}
