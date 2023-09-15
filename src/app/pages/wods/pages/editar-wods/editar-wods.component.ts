import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wod } from '../../../../modules/Wod.module';

@Component({
  selector: 'app-editar-wods',
  templateUrl: './editar-wods.component.html',
  styleUrls: ['../../wods.component.scss']
})
export class EditarWodsComponent implements OnInit {
  Wods: Wod[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Realiza una solicitud HTTP GET a la API para obtener los datos
    this.http.get<Wod[]>('URL_DE_TU_API').subscribe(
      (data: Wod[]) => {
        this.Wods = data; // Asigna los datos de la API a la propiedad Wods
      },
      (error) => {
        console.error('Error al obtener los datos de la API', error);
      }
    );
  }
}
