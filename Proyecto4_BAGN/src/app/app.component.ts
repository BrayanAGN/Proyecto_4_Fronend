import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { AltaPacientesComponent } from './alta-pacientes/AltaPacientesComponent';
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { AltaMedicosComponent } from './alta-medicos/alta-medicos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, FooterComponent, NavBarComponent, ListadoPacientesComponent, AltaPacientesComponent,
    ListadoMedicosComponent, AltaMedicosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto4_BAGN';
}
