import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    // Recuperar el valor de diaSemana desde el Local Storage al inicializar el servicio
    this.diaSemana = localStorage.getItem('diaSemana') || ''; // Si no existe, asignar un valor vacío
  }

  public diaSemana: string = '';

  // Método para establecer el valor de diaSemana y guardarlo en el Local Storage
  setDiaSemana(diaSemana: string) {
    this.diaSemana = diaSemana;
    localStorage.setItem('diaSemana', diaSemana);
  }
}
