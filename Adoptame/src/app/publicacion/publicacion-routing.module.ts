import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicacinesListaComponent } from './publicacines-lista/publicacines-lista.component';

import { PublicacionDetalleComponent } from './publicacion-detalle/publicacion-detalle.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  {
    path: '',
    component: PublicacinesListaComponent
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
export class PublicacionRoutingModule {}
