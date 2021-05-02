import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', [this.passwordValidation]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  passwordValidation(c: FormControl) {
    const { value } = c;
    if (value == null || value === '') {
      return {
        validatePassword:
          'Password cannot be empty'
      };
    } else if (value.length < 8) {
      return { validatePassword: 'password length should be at least 8 characters!' };
    } else {
      return null;
    }
  }
  login() {
    this.authService.login(this.form.value);
  }
}
