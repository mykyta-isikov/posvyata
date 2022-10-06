import { Component, OnInit } from '@angular/core';
import TeamLogs from "../../../shared/interfaces/TeamLogs";
import {TeamsService} from "../../../shared/services/teams/teams.service";

@Component({
  selector: 'app-teams-leaderboard',
  templateUrl: './teams-leaderboard.component.html',
  styleUrls: ['./teams-leaderboard.component.css']
})
export class TeamsLeaderboardComponent implements OnInit {
  teamLeaderboard: TeamLogs[] = [];
  errorMessage: string = '';
  fetching: boolean = false;

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.getTeamLogsData();
  }

  getTeamLogsData() {
    this.fetching = true;
    this.teamsService.getTeamLogs().subscribe(
      (teamLogs) => {
        this.teamLeaderboard = teamLogs;
      },
      (error) => {
        this.errorMessage = error.message;
      },
      () => {
        this.fetching = false;
      }
    );
  }

  clearTeamsLogs() {
    this.fetching = true;
    this.teamsService.clearTeamsLogs().subscribe(
      () => {
        this.getTeamLogsData();
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
