import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserDetails$ = new BehaviorSubject<any>(null);

  constructor(private httpService: BaseService, private router: Router) {}
  login(user: any) {
    this.httpService.post('/login', user).subscribe(
      (res: any) => {
        this.updateUserDetails(res);
        this.getUserDetails$.next(res);
        this.redirectToRoleSpecificPage(res);
      },
      (err) => {

      }
    );
  }

  updateUserDetails(user) {
    localStorage.setItem("user-atapp", JSON.stringify(user));
    localStorage.setItem("user-token-atapp", JSON.stringify(user.token));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  isLoggedIn(updateRoute = false) {
    const user = localStorage.getItem("user-atapp");
    this.getUserDetails$.next(user);
    if(updateRoute) this.redirectToRoleSpecificPage(user);
    return !!user;
  }
  redirectToRoleSpecificPage(user) {
    user.role === 'Student' ?
    this.router.navigate(['/student']) : this.router.navigate(['/teacher'])
  }
}
