import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-wods',
  templateUrl: './consulta-wods.component.html',
  styleUrls: ['../../wods.component.scss']
})
export class ConsultaWodsComponent {
  horarios: any[] = [
    { id: '1', dia: 'Lunes', fecha: '2020-10-12'},
    { id: '2', dia: 'Martes', fecha: '2020-10-12'},
    { id: '3', dia: 'Miercoles', fecha: '2020-10-12'},
    { id: '4', dia: 'Jueves', fecha: '2020-10-12'},
    { id: '5', dia: 'Viernes', fecha: '2020-10-12'},
    { id: '6', dia: 'Sabado', fecha: '2020-10-12'},
    { id: '7', dia: 'Domingo', fecha: '2020-10-12'},
  ];

  constructor() { }

}
