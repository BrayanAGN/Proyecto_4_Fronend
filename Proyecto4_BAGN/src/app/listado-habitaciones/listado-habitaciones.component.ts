import { Component } from '@angular/core';
import { HabitacionesServiceService } from '../habitaciones-service.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-habitaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listado-habitaciones.component.html',
  styleUrl: './listado-habitaciones.component.css'
})
export class ListadoHabitacionesComponent {

  constructor(private hs: HabitacionesServiceService){
    hs.obtenerListaHabitaciones();
  }

  get listado(){
    return this.hs.listahabitaciones;
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
        this.hs.eliminarHabitacion(id);
      }
    })
  }
}
