import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesServiceService {
  //Atributos
   public urlServidor: string = "http://localhost:8082/";//url del servidor backend local
   //public urlServidor: string ="http://10.10.10.36:8082/"; ///ambiente de pruebas
   public listahabitaciones: any[];
   public tipo: any[];
   public estado: any[];

  constructor(private http: HttpClient, private router: Router) { 
    this.listahabitaciones = [];
    this.tipo=[];
    this.estado = [];
  }
  // Método para obtener la lista de pacientes
  obtenerListaHabitaciones(): void {
    this.http.get(this.urlServidor + "api/habitaciones").subscribe((respuesta: any) => {
        console.log(respuesta);
        this.listahabitaciones = respuesta;
      });
  }

  // Método para guardar un paciente
  guardarHabitacion(numeroHabitacion: String, tipo: string, estado: string, paciente: number){ // Agrega idHabitacion como parámetro
   this.http.post(this.urlServidor+"api/habitaciones",{
     "numeroHabitacion": numeroHabitacion,
     "tipoHabitacion": tipo,
     "estado": estado,
     "paciente": paciente,
   },).subscribe((respuesta: any)=>{
     console.log(respuesta.msg);

     Swal.fire({
       title: "habitacion guardado correctamente",
       showDenyButton: false,
       showCancelButton: false,
       confirmButtonText: "OK",
     }).then((result) => {
       if (result.isConfirmed) {
         this.router.navigate(["habitacion"]);
       }
     });
   });
  }

  //metodo para genero 
  ObtenerTipo(){
   console.log("Obteniendo categorías..."); // Agrega un console.log() para verificación
   return this.http.get<any[]>(this.urlServidor + "api/habitaciones/tipo");
 
 }
   
 obtenerEstado(){
  return this.http.get<any[]>(this.urlServidor + "api/habitaciones/estado");
 }

 //eliminar paciente 
 eliminarHabitacion(id: number): void{
   const parametrosPeticion = new HttpParams()
   .set("id", id)
   this.http.delete(this.urlServidor+"api/habitaciones/eliminar", {params:
     parametrosPeticion}).subscribe((respuesta: any) =>{
       console.log(respuesta);
       this.obtenerListaHabitaciones();
       Swal
       .fire({
         title: "eliminado",
         text: "cliente eliminado correctamente",
         icon: "success"
       });
     });
 }

 

 actualizarHabitacion(id:number,numeroHabitacion: String, tipo: string, estado: string, paciente: number){
   this.http.put(this.urlServidor+"api/habitaciones/actualizar/" + id,{
    "numeroHabitacion": numeroHabitacion,
    "tipoHabitacion": tipo,
    "estado": estado,
    "paciente": paciente,
   },).subscribe((respuesta: any)=>{
     console.log(respuesta.msg);

     Swal.fire({
       title: "habitacion actualizado correctamente",
       showDenyButton: false,
       showCancelButton: false,
       confirmButtonText: "OK",
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         // this.obtenerListaClientes();
         this.router.navigate(["habitacion"]);// sirve para redireccoonar una vez confirmado el registrp
       } else if (result.isDenied) {
         Swal.fire("Changes are not saved", "", "info");
       }
     });
   });
 }
}
