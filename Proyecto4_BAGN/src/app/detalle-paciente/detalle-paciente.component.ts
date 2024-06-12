import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesServiceService } from '../pacientes-service.service';

@Component({
  selector: 'app-detalle-paciente',
  standalone: true,
  imports: [],
  templateUrl: './detalle-paciente.component.html',
  styleUrl: './detalle-paciente.component.css'
})
export class DetallePacienteComponent {
//atributos
  private params: any;
  private id: number=0;

  //cosntrucutor
  constructor(private ruta: ActivatedRoute, private servicio: PacientesServiceService){
    this.params = this.ruta.params.subscribe( parametros =>{
      this.id = parametros["id"];
      console.log(this.id);
      this.servicio.obtenerPaciente(this.id);
    });
  }

  //get 
  get paciente(){
    return this.servicio.paciente;
  }
}
