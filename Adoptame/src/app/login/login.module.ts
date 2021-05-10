import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing-module';
import { RegistroComponent } from '../registro/registro/registro.component';


@NgModule({
    declarations: [
        LoginComponent,
        
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
    ]
})
export class LoginModule {

}
