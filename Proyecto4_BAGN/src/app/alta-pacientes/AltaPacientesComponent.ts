import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { PacientesServiceService } from '../pacientes-service.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-alta-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alta-pacientes.component.html',
  styleUrl: './alta-pacientes.component.css'
})
export class AltaPacientesComponent {
  genero: any[] = [];

  //atributos
  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("fechaNacimiento")
  referenciaFechaNacimiento!: ElementRef;

  @ViewChild("select_genero")
  referenciaGenero!: ElementRef<HTMLSelectElement>;
  
  @ViewChild("telefono")
  referenciaTelefono!: ElementRef;

  @ViewChild("correo")
  referenciaCorreo!: ElementRef;


  constructor(private servicio: PacientesServiceService) {
    this.ObtenerGenero();
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

  //metodo guardar
  guardarPacientes() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const fechaNacimiento = this.referenciaFechaNacimiento.nativeElement.value;
    const genero = this.referenciaGenero.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    const correo= this.referenciaCorreo.nativeElement.value;
    this.servicio.guardarPacientes(nombre, fechaNacimiento, genero, telefono, correo);
  }
}
