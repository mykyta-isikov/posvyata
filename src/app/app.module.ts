import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import {AdminLoginModule} from "./features/admin-login/admin-login.module";
import { TeamLoginComponent } from './features/team-login/team-login.component';
import {AdminPanelModule} from "./features/admin-panel/admin-panel.module";
import { WinnerComponent } from './features/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdminPanelComponent,
    TeamLoginComponent,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminLoginModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
