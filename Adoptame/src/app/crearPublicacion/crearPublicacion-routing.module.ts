import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';


const routes: Routes = [
  {
    path: '',
    component: CrearPublicacionComponent
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
export class CrearPublicacionRoutingModule {}
