import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductRoutingModule } from './publicacion-routing.module';
import { MaterialModule } from './../material/material.module';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionDetalleComponent } from './publicacion-detalle/publicacion-detalle.component';

@NgModule({
  declarations: [
    PublicacionComponent,
    PublicacionDetalleComponent,
    PublicacionDetalleComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class PublicacionModule {

}
