import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TeamLoginComponent} from "./features/team-login/team-login.component";
import {AdminPanelComponent} from "./features/admin-panel/admin-panel.component";
import {AdminLoginComponent} from "./features/admin-login/admin-login.component";
import {WinnerComponent} from "./features/winner/winner.component";

import {TeamGuard} from "./shared/guards/team/team.guard";
import {AdminGuard} from "./shared/guards/admin/admin.guard";

const routes: Routes = [
  { path: 'code', component: TeamLoginComponent },
  { path: 'auth/login/admin', component: AdminLoginComponent },
  { path: 'winner', component: WinnerComponent, canActivate: [TeamGuard] },
  { path: 'admin/panel', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: '/code', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
