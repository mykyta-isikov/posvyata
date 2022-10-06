import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../../shared/services/teams/teams.service";

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  place: number = -1;

  constructor(
    private teamsService: TeamsService,
  ) { }

  ngOnInit(): void {
    this.getTeamLogsData();
  }

  getUserId(): string {
    const _storageContent = localStorage.getItem('authorization');
    if (_storageContent === null) return '';
    const _token = _storageContent.split(' ')[1];
    const _decodedToken = atob(_token.split('.')[1]);
    return JSON.parse(_decodedToken).id;
  }

  getTeamLogsData() {
    this.teamsService.getTeamLogs().subscribe(
      (teamLogs) => {
        const _userId = this.getUserId();
        this.place = teamLogs.findIndex((log) => log.id === _userId);
        console.log(this.place)
      }
    );
  }

}
