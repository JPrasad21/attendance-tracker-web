import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserDetails$ = new BehaviorSubject<any>(null);
  redirectUrl: UrlSegment[] = [];

  constructor(private httpService: BaseService, private router: Router) { }
  login(user: any) {
    this.httpService.post('/login', user).subscribe(
      (res: any) => {
        this.updateUserDetails(res.data);
        this.getUserDetails$.next(res.data);
        this.redirectToRoleSpecificPage();
      },
      (err) => { }
    );
  }

  updateUserDetails(user) {
    localStorage.setItem('user-atapp', JSON.stringify(user));
    localStorage.setItem('user-token-atapp', JSON.stringify(user.token));
  }

  logout() {
    localStorage.clear();
    this.getUserDetails$.next(null);
    this.router.navigate(['/']);
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
