import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService} from '../../shared/services/publicaciones.service'
@Component({
  selector: 'app-publicacines-lista',
  templateUrl: './publicacines-lista.component.html',
  styleUrls: ['./publicacines-lista.component.scss']
})
export class PublicacinesListaComponent implements OnInit {
  publicaciones: Publicacion[]= []
  constructor(private publicacionesServices: PublicacionesService) { }

  ngOnInit(): void {
    this.publicacionesServices.getPulicaciones()
    .snapshotChanges().subscribe(item =>{
      this.publicaciones = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        //x["$idPublicacion"] = element.key;
        this.publicaciones.push(x as Publicacion);
      });
    });

   
  }
  clickPublicacion($idPublicacion : string){
    console.log('product');
    console.log($idPublicacion);
  }
  
}
