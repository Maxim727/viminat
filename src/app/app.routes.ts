import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home/home.component')
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./details/details/details.component')
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
