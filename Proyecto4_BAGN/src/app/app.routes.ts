import { Routes } from '@angular/router';
import { ListadoPacientesComponent } from './listado-pacientes/listado-pacientes.component';

export const routes: Routes = [
    { path: "pacientes", component: ListadoPacientesComponent},
    {path: "", redirectTo: "/pacientes", pathMatch: "full"},
];
