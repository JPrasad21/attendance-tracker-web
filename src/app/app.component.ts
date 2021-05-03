import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userDetails = null;
  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.authService.redirectUrl = route.snapshot.url;
    if (window.location.href.includes('seeder')) {

    } else if (this.authService.isLoggedIn()) {
      this.authService.redirectToRoleSpecificPage();
    } else {
      this.authService.redirectToLoginPage();
    }

    this.authService.getUserDetails$.subscribe(x => {
      this.userDetails = x;
    })
  }
}
