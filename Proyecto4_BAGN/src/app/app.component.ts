import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { AltaPacientesComponent } from './alta-pacientes/AltaPacientesComponent';
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { AltaMedicosComponent } from './alta-medicos/alta-medicos.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { AltaHabitacionesComponent } from './alta-habitaciones/alta-habitaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, FooterComponent, NavBarComponent, ListadoPacientesComponent, AltaPacientesComponent,
    ListadoMedicosComponent, AltaMedicosComponent, DetallePacienteComponent,HistorialMedicoComponent, AltaHabitacionesComponent
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto4_BAGN';
}
