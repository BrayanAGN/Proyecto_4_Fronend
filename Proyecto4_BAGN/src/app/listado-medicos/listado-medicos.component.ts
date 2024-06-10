import { Component } from '@angular/core';
import { MedicosServiceService } from '../medicos-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-medicos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-medicos.component.html',
  styleUrl: './listado-medicos.component.css'
})
export class ListadoMedicosComponent {
  constructor(private ms: MedicosServiceService){
    ms.obtenerListaMedicos();
  }

  get listado(){
    return this.ms.listaMedicos;
  }
}
