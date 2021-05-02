import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.scss']
})
export class TeacherLayoutComponent implements OnInit {

  selectedMenu = 'Dashboard';
  constructor() { }

  ngOnInit(): void {
  }
  onMenuChange(menu: string) {
    this.selectedMenu = menu;
  }

}
