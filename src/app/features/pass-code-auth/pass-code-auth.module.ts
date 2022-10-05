import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./auth.service";
import {HttpClientModule} from "@angular/common/http";
import {PassCodeAuthComponent} from "./pass-code-auth.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PassCodeAuthComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class PassCodeAuthModule { }
