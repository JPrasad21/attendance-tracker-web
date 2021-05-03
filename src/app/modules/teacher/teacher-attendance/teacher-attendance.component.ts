import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClassDetails } from 'src/app/typings';

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.scss']
})
export class TeacherAttendanceComponent implements OnInit, AfterViewInit {

  classViewColumns: string[] = ['className', 'sectionName', 'percentage'];
  dataSource: MatTableDataSource<ClassDetails>;

  classAndSections: ClassDetails[];
  filterDate = new Date();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getClassAndSectionsInfo();
  }
  ngAfterViewInit() {
  }
  getClassAndSectionsInfo() {
    this.teacherService.getClassAndSectionsInfo(this.filterDate.toLocaleDateString()).subscribe((x: any) => {
      this.classAndSections = x.data;
      this.dataSource = new MatTableDataSource(this.classAndSections);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }
}
