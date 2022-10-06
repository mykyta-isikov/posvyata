import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

interface EditNameInput {
  id: string,
  name: string
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

  createTeam(name: string) {
    let headers = new HttpHeaders();
    // @ts-ignore
    headers = headers.append('authorization', localStorage.getItem('authorization'))
    return this.http
      .post(environment.base_url + `teams/`, { name }, { headers })
      .pipe(take(1));
  }

  editName(input: EditNameInput) {
    let headers = new HttpHeaders();
    // @ts-ignore
    headers = headers.append('authorization', localStorage.getItem('authorization'))
    return this.http
      .put(environment.base_url + `teams/${input.id}/name`, { name: input.name }, { headers })
      .pipe(take(1));
  }

  reassignCode(id: string) {
    let headers = new HttpHeaders();
    // @ts-ignore
    headers = headers.append('authorization', localStorage.getItem('authorization'))
    return this.http
      .patch(environment.base_url + `teams/${id}/code`, { }, { headers })
      .pipe(take(1));
  }

  deleteTeam(id: string) {
    let headers = new HttpHeaders();
    // @ts-ignore
    headers = headers.append('authorization', localStorage.getItem('authorization'))
    return this.http
      .delete(environment.base_url + `teams/${id}`, { headers })
      .pipe(take(1));
  }

  clearTeamsLogs() {
    let headers = new HttpHeaders();
    // @ts-ignore
    headers = headers.append('authorization', localStorage.getItem('authorization'))
    return this.http
      .delete(environment.base_url + `teams/logs`, { headers })
      .pipe(take(1));
  }
}
