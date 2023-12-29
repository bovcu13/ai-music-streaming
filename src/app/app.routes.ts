import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./view/container/container.routes').then(m => m.routes) },
];
