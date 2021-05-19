import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing-module';
import { RegistroComponent } from '.././login/registro/registro.component'
import { MaterialModule } from '../material/material.module';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { VerificarMailComponent } from './verificar-mail/verificar-mail.component';

@NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent,
        RecuperarContrasenaComponent,
        VerificarMailComponent,
        
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule, 
        ReactiveFormsModule,
        MaterialModule,
    ]
})
export class LoginModule {

}
