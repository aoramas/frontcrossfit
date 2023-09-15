import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../../../../modules/Horario.module'; // Asegúrate de importar la clase o interfaz Horario adecuada

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['../../horarios.component.scss']
})
export class EditarHorarioComponent implements OnInit {
  horariosDelDia: Horario[] = [];
  nuevoHorario: Horario = {diaSemana: '', horaInicio: '', horaFin: ''};

  horaInicio: string = '';
  horaFin: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getHorarios();
  }

  getHorarios() {
    this.http.get<Horario[]>('http://localhost:3000/api/v1/horario').subscribe(
      (data: Horario[]) => {
        this.horariosDelDia = data;
      },
      (error) => {
        console.error('Error al obtener los datos de la API', error);
      }
    );
  }

  addHorario(horaInicio: string, horaFin: string) {
    console.log('Agregando horario', horaInicio, horaFin);
    this.http.post<Horario>('http://localhost:3000/api/v1/horario', {
      diaSemana: 'Lunes',
      horaInicio: horaInicio,
      horaFin: horaFin,
      estado: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }).subscribe(
      (data: Horario) => {
        console.log('Horario agregado con éxito', data);
        this.nuevoHorario = {diaSemana: '', horaInicio: '', horaFin: '' };
        this.getHorarios();
      },
      (error) => {
        console.error('Error al agregar el horario', error);
      }
    );
  }

}
