import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user.interfaces';
import { Observable } from 'rxjs';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  email: string;
  uid:string;
  publicaciones: Publicacion [] = [];

  constructor(private authService:AuthenticationService,private publicacionServices:PublicacionesService) { 
   this.email='';
   this.uid='';
  }

  ngOnInit(): void {
    this.email=this.authService.correo;
    this.uid=this.authService.uid;
  
  }
  misPlublicacines(){
    this.publicacionServices.filterById().subscribe(data=>{
      this.publicaciones = data})
  }

}
