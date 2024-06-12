import { Routes } from '@angular/router';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { AltaPacientesComponent } from './alta-pacientes/AltaPacientesComponent';
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { AltaMedicosComponent } from './alta-medicos/alta-medicos.component';
import { DetallePacienteComponent } from './detalle-paciente/detalle-paciente.component';
import { EdicionPacientesComponent } from './edicion-pacientes/edicion-pacientes.component';
import { HistorialMedicoComponent } from './historial-medico/historial-medico.component';
import { AltaHabitacionesComponent } from './alta-habitaciones/alta-habitaciones.component';
import { ListadoHabitacionesComponent } from './listado-habitaciones/listado-habitaciones.component';

export const routes: Routes = [
    { path: "pacientes", component: ListadoPacientesComponent},
    { path: "altapaciente", component: AltaPacientesComponent},
    { path: "pacientes/obtener/:id", component: DetallePacienteComponent},
    { path: "pacientes/actualizar/:id", component: EdicionPacientesComponent},
    { path: "historial/obtener/:id", component: HistorialMedicoComponent},

    { path: "altahabitacion", component: AltaHabitacionesComponent},
    { path: "habitacion", component: ListadoHabitacionesComponent},

    {path: "", redirectTo: "/pacientes", pathMatch: "full"},
    { path: "medicos", component: ListadoMedicosComponent},
    {path: "", redirectTo: "/medicos", pathMatch: "full"},
    { path: "altamedicos", component: AltaMedicosComponent},
];
