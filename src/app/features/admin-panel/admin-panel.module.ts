import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../shared/services/auth/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {TeamsService} from "../../shared/services/teams/teams.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService, TeamsService]
})
export class AdminPanelModule { }
