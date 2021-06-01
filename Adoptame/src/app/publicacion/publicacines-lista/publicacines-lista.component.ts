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
  publicaciones: Publicacion[]= [];
  publicaioneslist: Observable<Publicacion[]>;
  
  constructor(private publicacionesServices: PublicacionesService) {
    this.publicaioneslist= this.publicacionesServices.publicaiones;
    console.log(this.publicaioneslist);
   }
  
  ngOnInit(){
    console.log("poto")
    this.publicacionesServices.getPubliacaciones().subscribe(
      res => {
        console.log(res)
      });
    console.log(this.publiacion,"lol");
  }

  publiacion:any;
  clickPublicacion($idPublicacion : string){
    console.log('product');
    console.log($idPublicacion);
  }

  getCoffeeOrders = () =>
  this.publicacionesServices
    .getPubliacaciones()
    .subscribe(res => (this.publiacion = res)
    );
    
  
}
