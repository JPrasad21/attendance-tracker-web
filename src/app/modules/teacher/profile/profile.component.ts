import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/typings';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  teacherDetails: UserDetails;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.teacherDetails = this.authService.getUserDetails$.value;
  }

}
