import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistorialmedicoServiceService } from '../historialmedico-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historialmedico-listado',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './historialmedico-listado.component.html',
  styleUrl: './historialmedico-listado.component.css'
})
export class HistorialmedicoListadoComponent {

  @Input() historial: any;
  public nombrePaciente: string = ""; // Propiedad para almacenar el nombre del paciente
  public historialMedico: any; // Propiedad para almacenar el historial médico

  constructor(private hms: HistorialmedicoServiceService) { }

  consultarHistorialMedico(idPaciente: number) {
    this.hms.obtenerHistorialMedico(idPaciente).subscribe((response: any) => {
      this.historialMedico = response.historial; // Asignar el historial médico a la propiedad historialMedico
      this.nombrePaciente = response.nombrePaciente; // Asignar el nombre del paciente a la propiedad nombrePaciente
    });
  }

}
