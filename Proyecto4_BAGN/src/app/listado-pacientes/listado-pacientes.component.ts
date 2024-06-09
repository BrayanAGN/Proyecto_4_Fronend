import { Component } from '@angular/core';
import { PacientesServiceService } from '../pacientes-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-pacientes.component.html',
  styleUrl: './listado-pacientes.component.css'
})
export class ListadoPacientesComponent {
    
    constructor(private ps: PacientesServiceService){
      ps.obtenerListaPacientes();
    }

    get listado(){
      return this.ps.listaPacientes;
    }
}
