import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



import { AdminGuard } from '../admin.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'publicacion',
        canActivate: [AdminGuard],
        loadChildren: () => import('../publicacion/publicacion.module').then(m => m.PublicacionModule)
      },
      {
        path: 'login',
        canActivate: [AdminGuard],
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
      },
      
    ]
  },
 
  {
    path: '**',
    loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class RoutingModule { }