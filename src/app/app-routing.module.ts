import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {TeamLoginComponent} from "./features/team-login/team-login.component";
import {DashboardComponent} from "./features/dashboard/dashboard.component";
import {NiceGifComponent} from "./features/nice-gif/nice-gif.component";
import {AdminPanelComponent} from "./features/admin-panel/admin-panel.component";

import {TeamGuard} from "./shared/guards/team/team.guard";
import {AdminGuard} from "./shared/guards/admin/admin.guard";
import {AdminLoginComponent} from "./features/admin-login/admin-login.component";

const routes: Routes = [
  { path: 'code', component: TeamLoginComponent },
  { path: 'auth/login/admin', component: AdminLoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [TeamGuard] },
  { path: 'gif', component: NiceGifComponent, canActivate: [TeamGuard] },
  { path: 'admin/panel', component: AdminPanelComponent, canActivate: [AdminGuard] },
  { path: '',   redirectTo: '/code', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
