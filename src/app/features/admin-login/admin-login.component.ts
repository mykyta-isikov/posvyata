import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

interface TokenBearer {
  message: string,
  jwt_token: string
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!: FormGroup;
  fetching: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  loginAdmin() {
    this.fetching = true;
    this.authService
      .loginAdmin(this.adminLoginForm.value)
      .subscribe(
        (res) => {
          if (res.error) {
            this.errorMessage = res.error;
            return;
          }
          this.authService.saveAuthToken(res.jwt_token);
          this.router.navigate(['/admin/panel']);
        },
        (error) => {
          this.errorMessage = error.message;
        },
        () => {
          this.fetching = false;
        }
      );
  }

}
