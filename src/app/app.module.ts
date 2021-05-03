import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpTokenInterceptorService } from './interceptor/http-interceptor/http-interceptor';
import { SeederComponent } from './seeder/seeder.component';

@NgModule({
  declarations: [
    AppComponent,
    SeederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StudentModule,
    TeacherModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
