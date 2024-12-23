import { Routes } from '@angular/router';

export const MAIN_ROUTES: Routes = [
  {
    path: 'about-us',
    loadComponent: () => import('./pages/aboutUs/aboutUs.component')
  },
  {
    path: 'become-vendor',
    loadComponent: () => import('./pages/becomeVendor/becomeVendor.component')
  },
  {
    path: 'faqs',
    loadComponent: () => import('./pages/faq/faq.component')
  },
  {
    path: 'stores',
    loadComponent: () => import('./modules/stores/pages/storeList/storeList.component')
  },
  {
    path: 'stores/:slug',
    loadComponent: () => import('./modules/stores/pages/storeDetails/storeDetails.component')
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: 'categories',
    loadComponent: () => import('./pages/categories/categories.component')
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.routes').then(m => m.ACCOUNT_ROUTES),
  },
  {
    path: 'categories/:slug',
    loadComponent: () => import('./modules/products/pages/productList/productList.component')
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./modules/products/productDetails/productDetails.component')
  },
  {
    path: 'search/:term',
    loadComponent: () => import('./modules/products/pages/productList/productList.component')
  },
  {
    path: 'cart',
    loadComponent: () => import('./modules/orders/pages/cart/cart.component')
  },
  {
    path: 'checkout',
    loadComponent: () => import('./modules/orders/pages/checkout/checkout.component')
  },
  {
    path: 'order-complete',
    loadComponent: () => import('./modules/orders/pages/orderComplete/orderComplete.component')
  },
  {
    path: 'compare',
    loadComponent: () => import('./modules/products/pages/compare/compare.component')
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notFound/notFound.component')
  },

];
