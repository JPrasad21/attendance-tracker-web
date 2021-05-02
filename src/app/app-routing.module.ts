import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(e => e.AuthModule),
  },
  {
    path: 'student',
    loadChildren: () => import('./modules/student/student.module').then(e => e.StudentModule),
  },
  {
    path: 'teacher',
    loadChildren: () => import('./modules/teacher/teacher.module').then(e => e.TeacherModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
