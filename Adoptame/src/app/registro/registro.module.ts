import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './registro/registro.component';
import { RegistroRoutingModule } from './registro-routing-module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        RegistroComponent,
    ],
    imports: [
        CommonModule,
        RegistroRoutingModule,
        MaterialModule,
    ]
})
export class RegistroModule {

}
