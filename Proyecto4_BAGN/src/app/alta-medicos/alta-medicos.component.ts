import { Component, ElementRef, ViewChild } from '@angular/core';
import { MedicosServiceService } from '../medicos-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-alta-medicos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alta-medicos.component.html',
  styleUrl: './alta-medicos.component.css'
})
export class AltaMedicosComponent {
  genero: any[] = [];
  especialidad: any[] = [];

  //atributos
  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("select_especialidad")
  referenciaEspecialidad!: ElementRef<HTMLSelectElement>;

  @ViewChild("select_genero")
  referenciaGenero!: ElementRef<HTMLSelectElement>;
  
  @ViewChild("horario")
  referenciaHorario!: ElementRef;


  constructor(private servicio: MedicosServiceService) {
    this.ObtenerGenero();
    this.ObtenerEspecialidad();
  }

  //metodo obtener genero  
  ObtenerGenero() {
    this.servicio.ObtenerGenero().subscribe((respuesta: any) => {
      if (respuesta) {
        this.genero = respuesta.genero || respuesta;
        console.log(this.genero);
      }
    });
  }
 //metodo obtener especialidad
  ObtenerEspecialidad() {
    this.servicio.ObtenerEspecialidad().subscribe((respuesta: any) => {
      if (respuesta) {
        this.especialidad = respuesta.especialidad || respuesta;
        console.log(this.especialidad);
      }
    });
  }

  //metodo guardar
  guardarMedicos() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const especialidad = this.referenciaEspecialidad.nativeElement.value;
    const genero = this.referenciaGenero.nativeElement.value;
    const horario = this.referenciaHorario.nativeElement.value;
    this.servicio.guardarMedicos(nombre, especialidad, genero, horario);
  }
}
