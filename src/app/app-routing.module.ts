import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { WodsComponent } from './pages/wods/wods.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'horarios', component: HorariosComponent
  },
  {
    path: 'wods', component: WodsComponent
  },
  {
    path: 'ejercicios', component: EjerciciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
