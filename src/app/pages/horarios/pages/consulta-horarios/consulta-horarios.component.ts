import { Component } from '@angular/core';
import { DataService } from '../../../../shared/data/data.service';

@Component({
  selector: 'app-consulta-horarios',
  templateUrl: './consulta-horarios.component.html',
  styleUrls: ['../../horarios.component.scss'],
})
export class ConsultaHorariosComponent {
  horarios: any[] = [
    { id: '1', diaSemana: 'Lunes' },
    { id: '2', diaSemana: 'Martes' },
    { id: '3', diaSemana: 'Miercoles' },
    { id: '4', diaSemana: 'Jueves' },
    { id: '5', diaSemana: 'Viernes' },
    { id: '6', diaSemana: 'Sabado' },
    { id: '7', diaSemana: 'Domingo' },
  ];
  private diaSemana: string = '';

  constructor(private dataService: DataService) {}

  editHorario(diaSemana: string) {
    this.dataService.setDiaSemana(diaSemana);
  }

  deleteHorario(horario: any) {}

  getDiaSemana() {
    return this.diaSemana;
  }
}
