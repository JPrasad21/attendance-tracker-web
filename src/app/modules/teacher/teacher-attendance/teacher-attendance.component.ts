import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClassDetails, ClassViewModel } from 'src/app/typings';

@Component({
  selector: 'app-teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.scss']
})
export class TeacherAttendanceComponent implements OnInit, AfterViewInit {

  classViewColumns: string[] = ['className', 'sectionName', 'percentage'];
  dataSource: MatTableDataSource<ClassViewModel>;

  classAndSections: ClassDetails[];
  classViewModel: ClassViewModel[];

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.getClassAndSectionsInfo();
  }
  ngAfterViewInit() {
  }
  getClassAndSectionsInfo() {
    this.teacherService.getClassAndSectionsInfo().subscribe((x: any) => {
      this.classAndSections = x.data;
      this.transformToClassView();
    })
  }
  transformToClassView() {
    let classView: ClassViewModel[] = [];
    this.classAndSections.forEach(classObj => {
      const { _id: classId, className } = classObj;
      classObj.sections.forEach(section => {
        const { _id: sectionId, sectionName, studentId } = section;
        classView.push({
          className,
          classId,
          sectionName,
          sectionId,
          students: studentId,
          percentage: ''
        })
      })
    });
    this.classViewModel = classView;
    this.dataSource = new MatTableDataSource(this.classViewModel);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
}
