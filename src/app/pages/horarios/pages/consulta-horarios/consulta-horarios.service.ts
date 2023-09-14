import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { DataSourceHorarios } from "../editar-horario/data-source";


@Injectable({
  providedIn: "root",
})

export class HorariosConsultaService {
  apiUrl = "http://localhost:3000/horarios";
  constructor(private http:HttpClient) {}

  getHorarios() {
    return this.http.get<DataSourceHorarios>(this.apiUrl);
  }
}
