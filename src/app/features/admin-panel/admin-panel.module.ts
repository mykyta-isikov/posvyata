import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../shared/services/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {TeamsService} from "../../shared/services/teams/teams.service";
import { TeamsControllerComponent } from './teams-controller/teams-controller.component';
import {TeamRowComponent} from "./teams-controller/team-row/team-row.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TeamsControllerComponent,
    TeamRowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    TeamsControllerComponent
  ],
  providers: [AuthService, TeamsService]
})
export class AdminPanelModule { }
