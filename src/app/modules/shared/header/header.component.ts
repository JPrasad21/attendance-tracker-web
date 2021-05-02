import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/typings';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo: UserDetails;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getUserDetails$.value;
  }
  logout() {
    this.authService.logout();
  }
}
