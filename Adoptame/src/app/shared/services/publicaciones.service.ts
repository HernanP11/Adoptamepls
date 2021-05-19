import { Injectable } from '@angular/core';
//Firebase
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Observable, observable } from 'rxjs';
//Models
import { Publicacion } from '../models/publicacion.model'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicacionList: AngularFireList<any>;
  publicacionSelecionada: Publicacion=<Publicacion>{};
  publicaciones: Publicacion[]= []

  constructor(private firebase: AngularFireDatabase) {
    this.publicacionList= this.firebase.list('publicaciones');
   }

  getPulicaciones(){
    return this.publicacionList = this.firebase.list('publicaciones');

  }
  llenearPub (){
    this.publicacionList
    .snapshotChanges().subscribe(item =>{
      this.publicaciones = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        //x["$idPublicacion"] = element.key;
        this.publicaciones.push(x as Publicacion);
      });
    });

  }
  

  
  insertarPublicacion( publicacion: Publicacion){
    this.publicacionList.push({
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

  actualizarPublicacion(publicacion: Publicacion)
  {
    this.publicacionList.update(publicacion.$idPublicacion, {
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
    // confirmar que se creo
    ;
  }

  borrarProducto($idPublicacion: string){
    this.publicacionList.remove($idPublicacion);
  }

  seleccionarPublicacion( $idPublicacion: string){
    this.publicaciones.forEach(element => {
      if((element.$idPublicacion) === ( $idPublicacion)){
        element = this.publicacionSelecionada;
        console.log( this.publicacionSelecionada) ;
      }
    });
  }
}


