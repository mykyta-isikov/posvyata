import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import TeamLogs from "../../interfaces/TeamLogs";
import {environment} from "../../../../environments/environment";
import {map, take} from "rxjs";
import Team from "../../interfaces/Team";

interface TeamLogsResponse {
  teamLoginLogs: TeamLogs[]
}

interface TeamsResponse {
  teams: Team[]
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private http: HttpClient,
  ) { }

  getTeamLogs() {
    return this.http
      .get<TeamLogsResponse>(environment.base_url + 'teams/logs')
      .pipe(
        map(res => {
          const logs = [];
          for (let log of res.teamLoginLogs) {
            logs.push(log);
          }
          return logs;
        }),
        take(1)
      );
  }

  getTeams() {
    return this.http
      .get<TeamsResponse>(environment.base_url + 'teams/')
      .pipe(
        map(res => {
          const teams = [];
          for (let team of res.teams) {
            teams.push(team);
          }
          return teams;
        }),
        take(1)
      );
  }
}
