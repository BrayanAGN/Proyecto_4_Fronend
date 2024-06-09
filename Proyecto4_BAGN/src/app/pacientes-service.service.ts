import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PacientesServiceService {

   //Atributos
   public urlServidor: string = "http://localhost:8082/";//url del servidor backend local
   //public urlServidor: string ="http://10.10.10.36:8082/"; ///ambiente de pruebas
   public listaPacientes: any[];
   
   constructor(private http: HttpClient, private router: Router) { 
     this.listaPacientes = [];
   }
 
   // Método para obtener la lista de pacientes
   obtenerListaPacientes(): void {
     this.http.get(this.urlServidor + "api/pacientes").subscribe((respuesta: any) => {
         console.log(respuesta);
         this.listaPacientes = respuesta;
       },
       error => {
         console.error('Error al obtener la lista de pacientes', error);
       }
     );
   }
 
   // Método para guardar un paciente
   guardarPaciente(paciente: any): void {
     this.http.post(this.urlServidor + "api/pacientes", paciente).subscribe(
       (respuesta: any) => {
         console.log(respuesta.msg);
         Swal.fire({
           title: "Paciente guardado correctamente",
           showDenyButton: false,
           showCancelButton: false,
           confirmButtonText: "OK",
         }).then((result) => {
           if (result.isConfirmed) {
             this.router.navigate(["pacientes"]);
           } else if (result.isDenied) {
             Swal.fire("Los cambios no fueron guardados", "", "info");
           }
         });
       },
       error => {
         console.error('Error al guardar el paciente', error);
         Swal.fire("Error", "No se pudo guardar el paciente", "error");
       }
     );
   }  
}
