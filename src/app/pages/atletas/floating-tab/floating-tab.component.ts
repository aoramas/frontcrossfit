import { Component, EventEmitter, Output } from '@angular/core';
import { Atleta } from '../atleta.model';


@Component({
  selector: 'app-floating-tab',
  templateUrl: './floating-tab.component.html',
  styleUrls: ['./floating-tab.component.scss']
})
export class FloatingTabComponent {
  @Output() CloseFloatingWindow: EventEmitter<void> = new EventEmitter<void>();
  @Output() SaveAtleta: EventEmitter<Atleta> = new EventEmitter<Atleta>();

    // Propiedades para los datos del atleta
    atleta: Atleta = {
      nombres: '',
      fecha: new Date(),
      identificacion: '',
      correoElectronico: '',
      password: ''
    };

  closeWindow() {
    // Emitir el evento cuando se cierre la ventana flotante
    this.CloseFloatingWindow.emit();
  }
    // Método para guardar el atleta
    saveAtleta() {
      // Convertir la fecha a un objeto Date
      this.atleta.fecha = new Date(this.atleta.fecha);
      this.SaveAtleta.emit(this.atleta);
      this.closeWindow();
      console.log(this.atleta);
    }
}


