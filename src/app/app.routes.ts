import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'coming-soon',
    loadComponent: () => import('./main/pages/comingSoon/comingSoon.component')
  },
  {
    path: '404',
    loadComponent: () => import('./main/pages/notFound/notFound.component')
  },
  {
    path: '',
    loadComponent: () => import('./main/layout/layout.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/pages/login/login.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/pages/register/register.component'),
      },
      {
        path: '',
        loadChildren: () => import('./main/main.routes').then(m => m.MAIN_ROUTES),
      }
    ]

  },
  {
    path: '**',
    redirectTo: '404',
  }
];
