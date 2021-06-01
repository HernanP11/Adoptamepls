import { Injectable } from '@angular/core';
//Firebase
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, observable } from 'rxjs';
//Models
import { Publicacion } from '../models/publicacion.model'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicacionCol: AngularFirestoreCollection<any>;
  publicacionSelecionada: Publicacion=<Publicacion>{};
  publicaciones: Publicacion[]= []
  publicaiones: Observable<Publicacion[]>;

  constructor(private firebase:  AngularFirestore) {

    this.publicacionCol = firebase.collection<Publicacion>('items');
    this.publicaiones = this.publicacionCol.valueChanges();
    console.log( this.publicaiones,'listaaa' )
    console.log( firebase.collection<Publicacion>('items'),'shot' )
   }
 
  
  insertarPublicacion( publicacion: Publicacion){
    this.publicacionCol.add({
      idUsuario :publicacion.idUsuario,
      nombre: publicacion.nombreAnimal,
      edad: publicacion.edad,
      tamano: publicacion.tamano,
      vacunas: publicacion.vacunas,
      personalidad: publicacion.personalidad,
      descripcion: publicacion.descripcion,
      observacion: publicacion.observacion,
      energia: publicacion.energia,
      region: publicacion.region,
      ciudad: publicacion.ciudad,
      imagen: publicacion.imagen,
      especie: publicacion.especie,
    })
  }

  seleccionarPublicacion( $idPublicacion: string){
    this.publicaciones.forEach(element => {
      if((element.$idPublicacion) === ( $idPublicacion)){
        element = this.publicacionSelecionada;
        console.log( this.publicacionSelecionada) ;
      }
    });
  }

  crearPublicacion(){

  }

  ////////////
  getPubliacaciones() {
    return this.firebase.collection("items").valueChanges();
  }
}


