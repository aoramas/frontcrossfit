import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { WodsComponent } from './pages/wods/wods.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { HomeComponent } from './pages/home/home.component';
import { AtletasComponent } from './pages/atletas/atletas.component';
import { LoginComponent } from './pages/Login/login.component';
import { AsignarCoachComponent } from './pages/asignar-coach/asignar-coach.component';
import { CoachsComponent } from './pages/coachs/coachs.component';
import { EditarHorarioComponent } from './pages/horarios/pages/editar-horario/editar-horario.component';
import { ConsultaHorariosComponent } from './pages/horarios/pages/consulta-horarios/consulta-horarios.component';
import { ConsultaWodsComponent } from './pages/wods/pages/consulta-wods/consulta-wods.component';
import { EditarWodsComponent } from './pages/wods/pages/editar-wods/editar-wods.component';
import { HttpClientModule } from '@angular/common/http';
import { FloatingTabComponent } from './pages/atletas/floating-tab/floating-tab.component';

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
    children: [
      {
        path: '',
        component: ConsultaHorariosComponent,
      },
      {
        path: 'editar',
        component: EditarHorarioComponent,
        children: [
          {
            path: ':diaSemana',
            component: EditarHorarioComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'wods',
    component: WodsComponent,
    children: [
      {
        path: '',
        component: ConsultaWodsComponent,
      },
      {
        path: 'editar',
        component: EditarWodsComponent,
      },
    ],
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
    path: 'floating-tab',
    component: FloatingTabComponent,
  },
  {
    path: 'asignar-coach',
    component: AsignarCoachComponent,
  },
  {
    path: 'coachs',
    component: CoachsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
