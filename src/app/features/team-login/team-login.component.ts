import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {GetTeamsService} from "./get-teams.service";
import Team from "../../shared/interfaces/Team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-login',
  templateUrl: './team-login.component.html',
  styleUrls: ['./team-login.component.css']
})
export class TeamLoginComponent implements OnInit {
  loginTeamForm!: FormGroup;
  teams!: Team[];
  errorMessage: string = '';
  fetching = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private getTeamsService: GetTeamsService,
  ) { }

  ngOnInit(): void {
    this.loginTeamForm = this.fb.group({
      code: '',
      id: ''
    });

    this.getTeamsService.fetch().subscribe(
      (teams) => {
        this.teams = teams;
      },
      (error) => {
        this.errorMessage = error.message;
      },
      () => {
        this.fetching = false;
      }
    );
  }

  loginTeam() {
    console.log(this.loginTeamForm.value);
    this.fetching = true;
    this.authService
      .loginTeam(this.loginTeamForm.value)
      .subscribe(
        (res) => {
          if (res.error) {
            this.errorMessage = res.error;
            return;
          }
          this.authService.saveAuthToken(res.jwt_token);
          this.router.navigate(['/gif']);
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
