import { Component } from '@angular/core';
import { PacientesServiceService } from '../pacientes-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { HistorialmedicoServiceService } from '../historialmedico-service.service';

@Component({
  selector: 'app-listado-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-pacientes.component.html',
  styleUrl: './listado-pacientes.component.css'
})
export class ListadoPacientesComponent {
    
    constructor(private ps: PacientesServiceService, private hms: HistorialmedicoServiceService){
      ps.obtenerListaPacientes();
    }

    get listado(){
      return this.ps.listaPacientes;
    }

    eliminar(id: number){
      Swal.fire({
        title:"Seguro que deseas eliminar",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "SI",
        denyButtonText: "NO"  
      }).then((result)=>{
        if(result.isConfirmed){
          this.ps.eliminarPaciente(id);
        }
      })
    }

    //obtener historial medico 
    consultarHistorialMedico(idPaciente: number) {
      this.hms.obtenerHistorialMedico(idPaciente).subscribe((response: any) => {
        const historial = response.historial;
        const nombrePaciente = response.nombrePaciente;
        console.log("Historial médico de: " + nombrePaciente);
        console.log(historial);
        // Aquí puedes mostrar el nombre del paciente y el historial médico en tu interfaz de usuario
        // Por ejemplo, puedes asignarlos a propiedades del componente y luego mostrarlos en la ventana modal
      });
    }
}
