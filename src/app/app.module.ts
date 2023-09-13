import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { WodsComponent } from './pages/wods/wods.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HorariosComponent,
    WodsComponent,
    EjerciciosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
