import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
    {
        path: '',
        component: PerfilComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class PerfilRoutingModule {

}
