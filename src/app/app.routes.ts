import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { InterseccionesComponent } from './intersecciones/intersecciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'intersecciones', component: InterseccionesComponent}
];

export const routes: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);