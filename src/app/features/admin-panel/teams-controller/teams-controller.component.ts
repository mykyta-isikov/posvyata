import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {TeamsService} from "../../../shared/services/teams/teams.service";
import Team from "../../../shared/interfaces/Team";

@Component({
  selector: 'app-teams-controller',
  templateUrl: './teams-controller.component.html',
  styleUrls: ['./teams-controller.component.css']
})
export class TeamsControllerComponent implements OnInit {
  teams: Team[] = [];
  fetching: boolean = true;
  errorMessage: string = '';

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.fetching = true;
    this.teamsService.getTeams().subscribe(
      (teams) => {
        this.teams = teams;
      },
      (error) => {
        console.log(error)
        this.errorMessage = error.message;
      },
      () => {
        this.fetching = false;
      }
    );
  }
}
