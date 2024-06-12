import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PacientesServiceService {

   //Atributos
   public urlServidor: string = "http://localhost:8082/";//url del servidor backend local
   //public urlServidor: string ="http://10.10.10.36:8082/"; ///ambiente de pruebas
   public listaPacientes: any[];
   public genero: any[];
   public paciente: any;
   public habitaciones: any[];
   
   constructor(private http: HttpClient, private router: Router) { 
     this.listaPacientes = [];
     this.genero=[];
     this.paciente = {};
     this.habitaciones = []; 
   }
 
   // Método para obtener la lista de pacientes
   obtenerListaPacientes(): void {
     this.http.get(this.urlServidor + "api/pacientes").subscribe((respuesta: any) => {
         console.log(respuesta);
         this.listaPacientes = respuesta;
       });
   }
 
   // Método para guardar un paciente
   guardarPacientes(nombre: String, fechaNacimiento: Date, genero: string, telefono: string, correo: string, idHabitacion: number){ // Agrega idHabitacion como parámetro
    this.http.post(this.urlServidor+"api/pacientes",{
      "nombre": nombre,
      "fechaNacimiento": fechaNacimiento,
      "genero": genero,
      "telefono": telefono,
      "correoElectronico": correo,
      "idHabitacion": idHabitacion // Agrega el ID de la habitación seleccionada
    },).subscribe((respuesta: any)=>{
      console.log(respuesta.msg);

      Swal.fire({
        title: "paciente guardado correctamente",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["pacientes"]);
        }
      });
    });
   }

   //metodo para genero 
   ObtenerGenero(){
    console.log("Obteniendo categorías..."); // Agrega un console.log() para verificación
    return this.http.get<any[]>(this.urlServidor + "api/pacientes/genero");
  
  }
  	
  obtenerPaciente(id: number): void{
    this.http.get(this.urlServidor+"api/pacientes/obtener/" + id).subscribe(
      (respuesta: any) => {
        console.log(respuesta);
        this.paciente=respuesta;
      });
  }

  //eliminar paciente 
  eliminarPaciente(id: number): void{
    const parametrosPeticion = new HttpParams()
    .set("id", id)
    this.http.delete(this.urlServidor+"api/pacientes/eliminar", {params:
      parametrosPeticion}).subscribe((respuesta: any) =>{
        console.log(respuesta);
        this.obtenerListaPacientes();
        Swal
        .fire({
          title: "eliminado",
          text: "cliente eliminado correctamente",
          icon: "success"
        });
      });
  }

  obtenerListaHabitaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.urlServidor + "api/habitaciones/disponibles");
}

  actualizarPaciente(id:number, nombre: String, fechaNacimiento: Date, genero: string, telefono: string, correo: string){
    this.http.put(this.urlServidor+"api/pacientes/actualizar/" + id,{
      "id": id,
      "nombre": nombre,
      "fechaNacimiento": fechaNacimiento,
      "genero": genero,
      "telefono": telefono,
      "correoElectronico": correo
    },).subscribe((respuesta: any)=>{
      console.log(respuesta.msg);

      Swal.fire({
        title: "paciente actualizado correctamente",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonText: "OK",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // this.obtenerListaClientes();
          this.router.navigate(["pacientes"]);// sirve para redireccoonar una vez confirmado el registrp
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    });
  }

}
