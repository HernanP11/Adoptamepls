import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilRoutingModule } from './perfil-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionModule } from '../publicacion/publicacion.module';

@NgModule({
  declarations: [
    PerfilComponent
    
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PublicacionModule,
  ]
})
export class PerfilModule {

}
