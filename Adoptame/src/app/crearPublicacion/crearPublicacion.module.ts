import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPublicacionRoutingModule } from './crearPublicacion-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component'
@NgModule({
  declarations: [
    CrearPublicacionComponent,
    SubirImagenComponent
  ],
  imports: [
    CommonModule,
    CrearPublicacionRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class CrearPublicacionModule {

}
