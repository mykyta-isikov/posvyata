import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";
import {TeamsService} from "../../shared/services/teams/teams.service";
import TeamLogs from "../../shared/interfaces/TeamLogs";
import Team from "../../shared/interfaces/Team";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  teamLogs: TeamLogs[] = [];
  teams: Team[] = [];
  errorMessage: string = '';
  fetching: boolean = true;

  constructor(
    private authService: AuthService,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getTeamLogsData();
    this.getTeams();
  }

  logout() {
    this.authService.deleteAuthToken();
  }

  getTeamLogsData() {
    this.fetching = true;
    this.teamsService.getTeamLogs().subscribe(
      (teamLogs) => {
        this.teamLogs = teamLogs;
      },
      (error) => {
        this.errorMessage = error.message;
      },
      () => {
        this.fetching = false;
      }
    );
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
