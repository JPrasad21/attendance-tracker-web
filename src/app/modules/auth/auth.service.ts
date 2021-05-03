import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';
import { SnackbarService } from 'src/app/core/snackbar/snackbar.service';
import { UserDetails } from 'src/app/typings';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserDetails$ = new BehaviorSubject<UserDetails>(null);
  redirectUrl: UrlSegment[] = [];

  constructor(private httpService: BaseService, private router: Router, private toast: SnackbarService) { }
  login(user: any) {
    this.httpService.post('/login', user).subscribe(
      (res: any) => {
        this.updateUserDetails(res.data);
        this.getUserDetails$.next(res.data);
        this.redirectToRoleSpecificPage();
        this.toast.openSnackBar('Logged In successfully');
      },
      (err) => {
        this.toast.openSnackBar('Invalid Credentials', true);
      }
    );
  }

  updateUserDetails(user) {
    localStorage.setItem('user-atapp', JSON.stringify(user));
    localStorage.setItem('user-token-atapp', JSON.stringify(user.token));
  }
  getToken() {
    return JSON.parse(localStorage.getItem('user-token-atapp'));
  }

  logout() {
    localStorage.clear();
    this.getUserDetails$.next(null);
    this.router.navigate(['/']);
    this.toast.openSnackBar('You have been logged out.')
  }
  isLoggedIn() {
    const user = localStorage.getItem('user-atapp');
    this.getUserDetails$.next(JSON.parse(user));
    return !!user;
  }
  redirectToRoleSpecificPage() {
    const user = this.getUserDetails$.value;
    const url = !!this.redirectUrl.length ? this.redirectUrl : [`/${user.role.toLowerCase()}`];
    this.router.navigate(url);
  }
  redirectToLoginPage() {
    this.router.navigate(['/']);
  }
}
