import { Component } from '@angular/core';
import { Wod } from './data-source';

@Component({
  selector: 'app-editar-wods',
  templateUrl: './editar-wods.component.html',
  styleUrls: ['../../wods.component.scss']
})
export class EditarWodsComponent {

  horariosDelDia: any[] = [
    { id: '1', horaInicio: '9:00', horaFin: '10:00'},
    { id: '2', horaInicio: '10:00', horaFin: '11:00'},
    { id: '3', horaInicio: '11:00', horaFin: '12:00'},
    { id: '4', horaInicio: '12:00', horaFin: '13:00'},
    { id: '5', horaInicio: '13:00', horaFin: '14:00'},
  ];

  constructor(

  ){ }

}
