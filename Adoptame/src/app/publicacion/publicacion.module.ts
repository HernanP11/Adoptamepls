import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacionRoutingModule } from './publicacion-routing.module';
import { MaterialModule } from './../material/material.module';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { PublicacionDetalleComponent } from './publicacion-detalle/publicacion-detalle.component';
import { SharedModule } from '../shared/shared.module';
import { PublicacinesListaComponent } from './publicacines-lista/publicacines-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublicacionComponent,
    PublicacionDetalleComponent,
    PublicacinesListaComponent,
  ],
  imports: [
    CommonModule,
    PublicacionRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicacionModule {

}
