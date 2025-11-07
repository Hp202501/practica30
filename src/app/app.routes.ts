
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'vehiculos', loadComponent: () => import('./pages/vehiculos/vehiculos.component').then(m => m.VehiculosComponent) },
  { path: 'clientes', loadComponent: () => import('./pages/clientes/clientes.component').then(m => m.ClientesComponent) },
  { path: 'mecanicos', loadComponent: () => import('./pages/mecanicos/mecanicos.component').then(m => m.MecanicosComponent) },
  { path: 'servicios', loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent) },
  { path: '**', redirectTo: 'home' }
];
