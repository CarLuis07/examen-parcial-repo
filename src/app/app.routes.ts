import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch: 'full',
  },
  {
    path: 'post-firestore',
    loadComponent: () => import('./post/post-firestore/post-firestore.page').then( m => m.PostFirestorePage)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/pages/gallery/gallery.page').then( m => m.GalleryPage)
  },
];
