import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.scss']
})
export class StudentLayoutComponent implements OnInit {

  selectedMenu = 'Dashboard';
  constructor() { }

  ngOnInit(): void {
  }
  onMenuChange(menu: string) {
    this.selectedMenu = menu;
  }
}
