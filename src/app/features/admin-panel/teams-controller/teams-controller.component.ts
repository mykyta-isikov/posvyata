import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {TeamsService} from "../../../shared/services/teams/teams.service";
import Team from "../../../shared/interfaces/Team";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-teams-controller',
  templateUrl: './teams-controller.component.html',
  styleUrls: ['./teams-controller.component.css']
})
export class TeamsControllerComponent implements OnInit {
  createTeamForm!: FormGroup;
  teams: Team[] = [];
  fetching: boolean = true;
  errorMessage: string = '';

  constructor(
    private teamsService: TeamsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createTeamForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    })

    this.getTeams();
  }

  getTeams() {
    this.fetching = true;
    this.teamsService.getTeams().subscribe(
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

  createTeam() {
    this.fetching = true;
    this.teamsService.createTeam(this.createTeamForm.value.name).subscribe(
      () => {
        this.createTeamForm.reset();
        this.getTeams();
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
