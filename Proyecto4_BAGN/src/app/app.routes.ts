import { Routes } from '@angular/router';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';
import { AltaPacientesComponent } from './alta-pacientes/AltaPacientesComponent';
import { ListadoMedicosComponent } from './listado-medicos/listado-medicos.component';
import { AltaMedicosComponent } from './alta-medicos/alta-medicos.component';

export const routes: Routes = [
    { path: "pacientes", component: ListadoPacientesComponent},
    { path: "altapaciente", component: AltaPacientesComponent},
    {path: "", redirectTo: "/pacientes", pathMatch: "full"},
    { path: "medicos", component: ListadoMedicosComponent},
    {path: "", redirectTo: "/medicos", pathMatch: "full"},
    { path: "altamedicos", component: AltaMedicosComponent},
];
