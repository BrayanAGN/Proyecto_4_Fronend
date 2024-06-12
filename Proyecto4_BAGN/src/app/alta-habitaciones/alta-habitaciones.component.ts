import { Component, ElementRef, ViewChild } from '@angular/core';
import { HabitacionesServiceService } from '../habitaciones-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alta-habitaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alta-habitaciones.component.html',
  styleUrl: './alta-habitaciones.component.css'
})
export class AltaHabitacionesComponent {

  tipo: any[] = [];
  estado: any[] = [];

 
  //atributos
  @ViewChild("numeroHabitacion")
  referenciaNumero!: ElementRef;

  @ViewChild("tipoHabitacion")
  referenciaTipo!: ElementRef<HTMLSelectElement>;

  @ViewChild("estadoHabitacion")
  referenciaEstado!: ElementRef<HTMLSelectElement>;
  
  @ViewChild("paciente")
  referenciaPaciente!: ElementRef;


  constructor(private servicio: HabitacionesServiceService) {
    this.Obtenertipo();
    this.Obtenerestado();
  }

  //metodo obtener genero  
  Obtenertipo() {
    this.servicio.ObtenerTipo().subscribe((respuesta: any) => {
      if (respuesta) {
        this.tipo = respuesta.tipo || respuesta;
        console.log(this.tipo);
      }
    });
  }
 //metodo obtener especialidad
  Obtenerestado() {
    this.servicio.obtenerEstado().subscribe((respuesta: any) => {
      if (respuesta) {
        this.estado = respuesta.estado || respuesta;
        console.log(this.estado);
      }
    });
  }

  //metodo guardar
  guardarHabitacion() {
    const numeroHabitacion = this.referenciaNumero.nativeElement.value;
    const tipo = this.referenciaTipo.nativeElement.value;
    const estado = this.referenciaEstado.nativeElement.value;
    const paciente = this.referenciaPaciente.nativeElement.value;
    this.servicio.guardarHabitacion(numeroHabitacion, tipo, estado, parseInt(paciente));
  }

}
