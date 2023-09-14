import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-wods',
  templateUrl: './consulta-wods.component.html',
  styleUrls: ['../../wods.component.scss']
})
export class ConsultarWodsComponent {
  horarios: any[] = [
    { id: '1', diaSemana: 'Lunes'},
    { id: '2', diaSemana: 'Martes'},
    { id: '3', diaSemana: 'Miercoles'},
    { id: '4', diaSemana: 'Jueves'},
    { id: '5', diaSemana: 'Viernes'},
    { id: '6', diaSemana: 'Sabado'},
    { id: '7', diaSemana: 'Domingo'},
  ];

  constructor() { }

  editHorario(horario: any) {

  }

  deleteHorario(horario: any) {
    console.log('Eliminar horario');
  }
}
