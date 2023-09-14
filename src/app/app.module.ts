import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { LoginComponent } from './pages/Login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CoachsComponent } from './pages/coachs/coachs.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { EditarHorarioComponent } from './pages/horarios/pages/editar-horario/editar-horario.component';
import { ConsultaHorariosComponent } from './pages/horarios/pages/consulta-horarios/consulta-horarios.component';
import { WodsComponent } from './pages/wods/wods.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    AtletasComponent,
    LoginComponent,
    HomeComponent,
    CoachsComponent,
    HorariosComponent,
    EditarHorarioComponent,
    ConsultaHorariosComponent,
    WodsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
