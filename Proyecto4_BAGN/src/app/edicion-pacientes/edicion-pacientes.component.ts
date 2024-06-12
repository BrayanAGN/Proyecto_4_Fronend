import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { subscribe } from 'node:diagnostics_channel';
import { PacientesServiceService } from '../pacientes-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edicion-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edicion-pacientes.component.html',
  styleUrl: './edicion-pacientes.component.css'
})
export class EdicionPacientesComponent {
  genero: any[] = [];
  private params: any;
  private id: number= 0;

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


  constructor(private ruta: ActivatedRoute, private servicio: PacientesServiceService) {
    this.ObtenerGenero();

    this.params=this.ruta.params.subscribe(parametros =>{
      this.id=parametros["id"];
      console.log(this.id);
      this.servicio.obtenerPaciente(this.id);
    })
  }

  //Get
  get paciente(){
    return this.servicio.paciente;
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
    this.servicio.actualizarPaciente(this.id, nombre, fechaNacimiento, genero, telefono, correo);
  }

}
