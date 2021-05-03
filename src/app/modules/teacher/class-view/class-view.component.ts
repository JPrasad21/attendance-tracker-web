import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClassDetails } from 'src/app/typings';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

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
  getClassAndSectionsInfo() {
    this.teacherService.getClassAndSectionsInfo(this.filterDate.toLocaleDateString()).subscribe((x: any) => {
      this.classAndSections = x.data;
      this.dataSource = new MatTableDataSource(this.classAndSections);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

}
