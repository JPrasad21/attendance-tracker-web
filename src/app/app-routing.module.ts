import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth/auth.guard';
import { RoleGuard } from './guard/role/role.guard';
import { SeederComponent } from './seeder/seeder.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(e => e.AuthModule),
  },
  {
    path: 'student',
    loadChildren: () => import('./modules/student/student.module').then(e => e.StudentModule),
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'teacher',
    loadChildren: () => import('./modules/teacher/teacher.module').then(e => e.TeacherModule),
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'seeder',
    component: SeederComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
