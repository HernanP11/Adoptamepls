import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';

@Component({
  selector: 'app-publicacion-detalle',
  templateUrl: './publicacion-detalle.component.html',
  styleUrls: ['./publicacion-detalle.component.scss']
})
export class PublicacionDetalleComponent implements OnInit {

  //publicacion!: Observable<Publicacion>;
  publicacion:Publicacion | undefined;
  constructor(private route: ActivatedRoute,
               private publicacionesServices: PublicacionesService
  ) { 
    //this.publicacion= new Observable<Publicacion>;
    
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{    
      const id = params.id;
      console.log(id,"veeeeeeer")
      this.verPublicacion(id);
    });
  }
  verPublicacion(id: string){
    console.log(id,"id");
    console.log(this.publicacionesServices.getPublicacion(id));
    this.publicacionesServices.getPublicacion(id)
    .subscribe(pub => {
      console.log(pub, "publicacion")
      this.publicacion=pub;

    })
    
  
   
  }
  

}
