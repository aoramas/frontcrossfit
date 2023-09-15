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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realiza una solicitud HTTP GET a la API para obtener los datos
    this.http.get<Horario[]>('http://localhost:3000/api/v1/horario').subscribe(
      (data: Horario[]) => {
        this.horariosDelDia = data; // Asigna los datos de la API a la propiedad horariosDelDia
      },
      (error) => {
        console.error('Error al obtener los datos de la API', error);
      }
    );
  }
}
