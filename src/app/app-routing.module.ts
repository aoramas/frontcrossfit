import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { WodsComponent } from './pages/wods/wods.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { HomeComponent } from './pages/home/home.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { LoginComponent } from './pages/Login/login.component';
import { CoachsComponent } from './pages/coachs/coachs.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'horarios',
    component: HorariosComponent,
  },
  {
    path: 'wods',
    component: WodsComponent,
  },
  {
    path: 'ejercicios',
    component: EjerciciosComponent,
  },
  {
    path: 'atletas',
    component: AtletasComponent,
  },
  {
    path: 'coachs',
    component: CoachsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
