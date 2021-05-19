import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';

//import { NotificacionComponent } from './componentes/notificacion/notificacion.component';




@NgModule({
  declarations: [
   
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
