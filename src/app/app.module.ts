import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PassCodeAuthModule} from "./features/pass-code-auth/pass-code-auth.module";
import {DashboardModule} from "./features/dashboard/dashboard.module";
import {NiceGifModule} from "./features/nice-gif/nice-gif.module";
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import {AdminLoginModule} from "./features/admin-login/admin-login.module";
import { TeamLoginComponent } from './features/team-login/team-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdminPanelComponent,
    TeamLoginComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      PassCodeAuthModule,
      DashboardModule,
      NiceGifModule,
      AdminLoginModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
