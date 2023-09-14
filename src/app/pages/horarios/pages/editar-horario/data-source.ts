import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Horario {
  id: number;
  diaSemana: string;
  horaInicio: string;
  horaFin: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataSourceHorarios implements DataSource<Horario> {

  data = new BehaviorSubject<Horario[]>([]);


  getHorarios() {
    return this.data.asObservable();
  }

  setHorarios(horarios: Horario[]) {
    this.data.next(horarios);
  }


  connect(): Observable<Horario[]> {
    return this.data;
  }

  disconnect() { }
}
