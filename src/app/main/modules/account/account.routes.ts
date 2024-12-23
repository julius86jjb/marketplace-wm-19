import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/accountLayout/accountLayout.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
      },
      {
        path: 'orders',
        loadComponent: () => import('./pages/orders/orders.component')
      },
      {
        path: 'orders/:id',
        loadComponent: () => import('./pages/orders/orderDetails.component')
      },
      {
        path: 'addresses',
        loadComponent: () => import('./pages/addresses/addresses.component')
      },
      {
        path: 'details',
        loadComponent: () => import('./pages/details/details.component')
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./pages/wishlist/wishlist.component')
  },

];
