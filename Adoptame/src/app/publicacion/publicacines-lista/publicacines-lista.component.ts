import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService} from '../../shared/services/publicaciones.service'
@Component({
  selector: 'app-publicacines-lista',
  templateUrl: './publicacines-lista.component.html',
  styleUrls: ['./publicacines-lista.component.scss']
})
export class PublicacinesListaComponent implements OnInit {
 
  $publicaiones = this.publicacionesServices.publicaciones;
  publicaciones: Publicacion [] = [];
  
  constructor(private publicacionesServices: PublicacionesService) {}  
  ngOnInit(){
    this.getPubliaciones();
    console.log(this.publicaciones,"pls");

  }
  clickPublicacion($idPublicacion : string){
    console.log('pruebaaaaaaaa');
    console.log($idPublicacion);
  }
  getPubliaciones(){
    this.publicacionesServices.publicaciones
    .subscribe(publiacion =>{
      this.publicaciones = publiacion
      console.log(this.publicaciones,"looool")
    })
  }
}
