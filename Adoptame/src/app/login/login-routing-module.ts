import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RegistroComponent } from './registro/registro.component';
import { VerificarMailComponent } from './verificar-mail/verificar-mail.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
     },
     {
        path: 'confirmaremail',
        component: VerificarMailComponent
     },
     {
        path: 'recuperarcontrasena',
        component: RecuperarContrasenaComponent
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
export class LoginRoutingModule {

}
