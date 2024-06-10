import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MedicosServiceService {

  public urlServidor: string ="http://localhost:8082/"; ///ambiente local
  //public urlServidor: string ="http://10.10.10.36:8082/"; ///ambiente de pruebas

  public listaMedicos: any[];
  public genero: any[];
  public especialidad: any[];


  constructor(private http: HttpClient, private router: Router) { 
    this.listaMedicos = [];
     this.genero=[];
     this.especialidad=[];
  }

  // Método para obtener la lista de pacientes
  obtenerListaMedicos(): void {
    this.http.get(this.urlServidor + "api/medicos").subscribe((respuesta: any) => {
        console.log(respuesta);
        this.listaMedicos = respuesta;
      },
      error => {
        console.error('Error al obtener la lista de pacientes', error);
      }
    );
  }

  // Método para guardar un paciente
  guardarMedicos(nombre: string, especialidad: string, genero: String, horario: string){
   this.http.post(this.urlServidor+"api/medicos",{
     "nombre": nombre,
     "especialidad": especialidad,
     "genero": genero,
     "horario": horario

   },).subscribe((respuesta: any)=>{
     console.log(respuesta.msg);
   
     Swal.fire({
       title: "medico guardado correctamente",
       showDenyButton: false,
       showCancelButton: false,
       confirmButtonText: "OK",
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         // this.obtenerListaClientes();
         this.router.navigate(["medicos"]);// sirve para redireccoonar una vez confirmado el registrp
       } else if (result.isDenied) {
         Swal.fire("Changes are not saved", "", "info");
       }
     });
   });
  }  

  //metodo para genero 
  ObtenerGenero(){
   console.log("Obteniendo genero..."); // Agrega un console.log() para verificación
   return this.http.get<any[]>(this.urlServidor + "api/medicos/genero");
 
 }

  //metodo para especialidad
  ObtenerEspecialidad(){
    console.log("Obteniendo especialidad..."); // Agrega un console.log() para verificación
    return this.http.get<any[]>(this.urlServidor + "api/medicos/especialidad");
  
  }
}
