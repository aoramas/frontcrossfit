import { Component } from '@angular/core';
import { Atleta } from './atleta.model';
@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.component.html',
  styleUrls: ['./atletas.component.scss']
})
export class AtletasComponent {
  atletas: Atleta[] = [];
  showFloatingWindow:boolean = false;

  toggleFloatingWindow() {
    this.showFloatingWindow = !this.showFloatingWindow;
    console.log(this.showFloatingWindow);
  }
  // Método para manejar el evento CloseFloatingWindow
  handleFloatingWindowClose() {
    this.showFloatingWindow = false;
    console.log(this.showFloatingWindow);
  }
  handleSaveAtleta(atleta: Atleta) {
    this.atletas.push(atleta); // Agregar el nuevo atleta a la lista
  }
}


