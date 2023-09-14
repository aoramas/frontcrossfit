import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { LoginComponent } from './pages/Login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AsignarCoachComponent } from './pages/asignar-coach/asignar-coach.component';
import { CoachsComponent } from './pages/coachs/coachs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    AtletasComponent,
    LoginComponent,
    HomeComponent,
    AsignarCoachComponent,
    CoachsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
