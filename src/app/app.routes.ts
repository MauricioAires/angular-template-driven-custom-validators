import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Custom Validators | home',
    path: '',
    loadComponent: () => import('./page/home/home').then((c) => c.Home),
  },
];
