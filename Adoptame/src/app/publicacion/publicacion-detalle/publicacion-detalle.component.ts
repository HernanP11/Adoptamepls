import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';

@Component({
  selector: 'app-publicacion-detalle',
  templateUrl: './publicacion-detalle.component.html',
  styleUrls: ['./publicacion-detalle.component.scss']
})
export class PublicacionDetalleComponent implements OnInit {

  //publicacion!: Observable<Publicacion>;
  idUpub=''
  esUsuario=false;
  idPub=""
  publicacion:Publicacion | undefined;
  constructor(private route: ActivatedRoute,
               private publicacionesServices: PublicacionesService,
               private authService:AuthenticationService,
               private router: Router
  ) { 
    //this.publicacion= new Observable<Publicacion>;
    
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{    
      const id = params.id;
      this.idPub=id;
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
      this.idUpub=pub.idUsuario
      if(pub.idUsuario==this.authService.uid){
        this.esUsuario=true;
      }
    })
  }
  adoptado(){
    this.publicacionesServices.borrarPublicacion(this.idPub);
    this.router.navigate(['/publicacion']);
  }
}
