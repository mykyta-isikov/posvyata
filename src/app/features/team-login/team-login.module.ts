import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../shared/services/auth/auth.service";
import { GetTeamsService } from "./get-teams.service"
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    GetTeamsService
  ]
})
export class TeamLoginModule { }
