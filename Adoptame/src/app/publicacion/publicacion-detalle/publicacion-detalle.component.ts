import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';

@Component({
  selector: 'app-publicacion-detalle',
  templateUrl: './publicacion-detalle.component.html',
  styleUrls: ['./publicacion-detalle.component.scss']
})
export class PublicacionDetalleComponent implements OnInit {

  publicacion: Publicacion | undefined;

  constructor(private route: ActivatedRoute,
               private publicacionesServices: PublicacionesService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{
      const id = params.$idPublicacion;
      this.verPublicacion(id);

    });
  }
  verPublicacion($idPublicacion: string){
    this.publicacionesServices.seleccionarPublicacion
  }
  crearPublicacion(){
    const newPublicacion: Publicacion = {
      $idPublicacion: '1',
    idUsuario: '1',
    nombreAnimal: 'Toby',
    edad: 1,
    descripcion: 'muy simpatico',
    imagen: 'assets/images/perro.jpg',
    observacion:'Fue maltrado',
    region:'Valparaiso',
    ciudad : 'Limache',
    personalidad : 'Enojon',
    energia: 'Alta',
    vacunas:'No',
    tamano: 'Medio',
    especie: 'Perro',
    }
    this.publicacionesServices.insertarPublicacion(newPublicacion)
    
  }

}
