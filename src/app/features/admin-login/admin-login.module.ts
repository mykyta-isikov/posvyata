import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {AdminLoginComponent} from "./admin-login.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";



@NgModule({
  declarations: [
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AdminLoginModule { }
