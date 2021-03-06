import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publicacion } from '../../shared/models/publicacion.model'
import { PublicacionesService } from '../../shared/services/publicaciones.service'
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {
 
 @Input() publicacion:Publicacion=<Publicacion>{} ;
 @Output() publicacionClicked: EventEmitter<any> = new EventEmitter();

  $publicaciones = this.publicacionesService.publicaciones;
  //publicacion: Publicacion; 
  constructor( private publicacionesService : PublicacionesService) { }

  ngOnInit(): void {
    console.log(this. $publicaciones)
  }

}
