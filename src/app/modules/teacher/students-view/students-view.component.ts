import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassDetails, StudentDetails } from 'src/app/typings';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss']
})
export class StudentsViewComponent implements OnInit {

  classViewColumns: string[] = ['fullName', 'attendancePercentage'];
  dataSource: MatTableDataSource<StudentDetails>;

  studentsList: StudentDetails[];
  filterDate = new Date();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private teacherService: TeacherService) {
    this.teacherService.selectedClass$.subscribe(x => {
      if (x) this.getStudentsInfo();
    })
  }

  ngOnInit(): void {
    // this.getStudentsInfo();
  }
  getStudentsInfo() {
    this.teacherService.getStudentsInfo().subscribe((x: any) => {
      this.studentsList = x.data;
      this.dataSource = new MatTableDataSource(this.studentsList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
