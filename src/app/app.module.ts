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
import { HorariosComponent } from './pages/horarios/horarios.component';
import { EditarHorarioComponent } from './pages/horarios/pages/editar-horario/editar-horario.component';
import { ConsultaHorariosComponent } from './pages/horarios/pages/consulta-horarios/consulta-horarios.component';
import { WodsComponent } from './pages/wods/wods.component';
import { ConsultaWodsComponent } from './pages/wods/pages/consulta-wods/consulta-wods.component';
import { EditarWodsComponent } from './pages/wods/pages/editar-wods/editar-wods.component';

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
    HorariosComponent,
    EditarHorarioComponent,
    ConsultaHorariosComponent,
    WodsComponent,
    ConsultaWodsComponent,
    EditarWodsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
