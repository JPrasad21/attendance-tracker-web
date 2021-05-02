import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { StudentModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { AuthService } from './modules/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './core/base/base.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StudentModule,
    TeacherModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
