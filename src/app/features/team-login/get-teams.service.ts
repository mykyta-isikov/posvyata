import { Injectable } from '@angular/core';
import {map, take, toArray} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import Team from "../../shared/interfaces/Team";

interface TeamsResponse {
  teams: Team[]
}

@Injectable({
  providedIn: 'root'
})
export class GetTeamsService {

  constructor(
    private http: HttpClient
  ) { }

  fetch() {
    return this.http
      .get<TeamsResponse>(environment.base_url + 'teams')
      .pipe(
        map(res => {
          const teams = []
          for (let team of res.teams) {
            teams.push(team);
          }
          return teams;
        }),
      take(1)
    );
  }
}
