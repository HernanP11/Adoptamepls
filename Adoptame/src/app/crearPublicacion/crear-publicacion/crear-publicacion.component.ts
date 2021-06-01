import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicacion } from 'src/app/shared/models/publicacion.model';
import { PublicacionesService } from 'src/app/shared/services/publicaciones.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private publicacionesService: PublicacionesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.form = this.formBuilder.group({
      nombreAnimal:['', [Validators.required]],
      edad: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      observacion:['', [Validators.required]],
      region:['', [Validators.required]],
      ciudad :['', [Validators.required]],
      personalidad : ['', [Validators.required]],
      energia: ['', [Validators.required]],
      vacunas:['', [Validators.required]],
      tamano: ['', [Validators.required]],
      especie: ['', [Validators.required]],
      idUsuario:['', [Validators.required]],
    })
  }

  crearPublicacionPrueba(){
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
    this.publicacionesService.insertarPublicacion(newPublicacion)
    console.log('pruebas');
    
  }


  crearPublicacion(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      const publiacion = this.form.value;
      this.publicacionesService.insertarPublicacion(publiacion)
      console.log('entro')
    }
    console.log(' no entro')
  }

  ngOnInit(): void {
  }


}
