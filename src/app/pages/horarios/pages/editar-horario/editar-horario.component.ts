import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Horario } from '../../../../modules/Horario.module'; // Asegúrate de importar la clase o interfaz Horario adecuada
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['../../horarios.component.scss'],
})
export class EditarHorarioComponent implements OnInit {
  horariosDelDia: Horario[] = [];
  nuevoHorario: Horario = { diaSemana: '', horaInicio: '', horaFin: '' };

  diaSemana: string = '';
  horaInicio: string = '';
  horaFin: string = '';

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.getHorarios();
    this.diaSemana = this.dataService.diaSemana;
  }

  getHorarios() {
    this.http.get<Horario[]>('http://localhost:3001/api/v1/horario').subscribe(
      (data: Horario[]) => {
        this.horariosDelDia = data.filter(
          (horario) => horario.diaSemana === this.diaSemana
        );
      },
      (error) => {
        console.error('Error al obtener los datos de la API', error);
      }
    );
  }

  addHorario(horaInicio: string, horaFin: string) {
    console.log('Agregando horario', horaInicio, horaFin);
    this.http
      .post<Horario>('http://localhost:3001/api/v1/horario', {
        diaSemana: 'Martes',
        horaInicio: horaInicio,
        horaFin: horaFin,
        estado: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      .subscribe(
        (data: Horario) => {
          console.log('Horario agregado con éxito', data);
          this.nuevoHorario = { diaSemana: '', horaInicio: '', horaFin: '' };
          this.getHorarios();
        },
        (error) => {
          console.error('Error al agregar el horario', error);
        }
      );
  }
}
