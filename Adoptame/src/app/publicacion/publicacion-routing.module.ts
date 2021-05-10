import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacionDetalleComponent } from './publicacion-detalle/publicacion-detalle.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: PublicacionComponent
  },
  {
    path: ':id',
    component: PublicacionDetalleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}
