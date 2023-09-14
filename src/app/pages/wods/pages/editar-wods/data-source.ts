import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Wod {
  id: number;
  nombres: string;
  dia: string;
  fecha: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class DataSourceHorarios implements DataSource<Wod> {

  data = new BehaviorSubject<Wod[]>([]);


  getHorarios() {
    return this.data.asObservable();
  }

  setHorarios(horarios: Wod[]) {
    this.data.next(horarios);
  }


  connect(): Observable<Wod[]> {
    return this.data;
  }

  disconnect() { }
}
