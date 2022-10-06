import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Team from "../../../../shared/interfaces/Team";
import {TeamsService} from "../../../../shared/services/teams/teams.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: '[app-team-row]',
  templateUrl: './team-row.component.html',
  styleUrls: ['./team-row.component.css']
})
export class TeamRowComponent implements OnInit {
  editNameForm!: FormGroup;
  editingName: boolean = false;
  fetching: boolean = false;

  @Input('data') team!: Team;

  @Output() dataUpdateEvent = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.editNameForm = this.fb.group({
      id: this.team._id,
      name: new FormControl(this.team.name, [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }

  renameBtn() {
    this.editingName = !this.editingName;
  }

  confirmNameEdit() {
    this.editingName = false;
    this.fetching = true;
    this.teamsService.editName(this.editNameForm.value).subscribe(
      (res) => {
        this.dataUpdateEvent.next('');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.fetching = false;
      }
    )
  }

  reassignCode() {
    this.fetching = true;
    this.teamsService.reassignCode(this.team._id).subscribe(
      (res) => {
        this.dataUpdateEvent.next('');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.fetching = false;
      }
    )
  }
  deleteTeam() {
    this.fetching = true;
    this.teamsService.deleteTeam(this.team._id).subscribe(
      (res) => {
        this.dataUpdateEvent.next('');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.fetching = false;
      }
    )
  }
}
