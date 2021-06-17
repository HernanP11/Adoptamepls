import { Injectable } from '@angular/core';
//Firebase
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, observable } from 'rxjs';
import { finalize, flatMap, map } from 'rxjs/operators';
import { FileI } from '../models/file.interface';
//Models
import { Publicacion } from '../models/publicacion.model'
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicaciones: Observable<Publicacion[]>;
  publicacionCol: AngularFirestoreCollection<Publicacion>;
  uid:string;
  private filePath: any;
  private downloadURL: Observable<string> ;


  constructor(private firebase:  AngularFirestore,
     private storage: AngularFireStorage,
     private authService: AuthenticationService,) {
    this.uid= this.authService.uid;
    this.publicaciones = new Observable<Publicacion[]> ();
    this.publicacionCol = firebase.collection<Publicacion>('items');
    this.getPubliacaciones();
    this.downloadURL=new Observable();
    
   }
 
  
  insertarPublicacion( publicacion: Publicacion ,imagen:FileI){
    this.uploadImage(publicacion, imagen);
    //this.publicacionCol.add(publicacion);
  }

  
  private uploadImage(publicacion: Publicacion, image: FileI) {
    this.filePath = `images/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadURL = urlImage;
            this.savePost(publicacion);
          });
        })
      ).subscribe();
  }

  private savePost(publicacion: Publicacion) {
    const postObj = {
      nombreAnimal: publicacion.nombreAnimal,
      imagen: this.downloadURL,
      fileRef: this.filePath,
      tipo:publicacion.tipo,
      celular:publicacion.celular,
      especie:publicacion.especie,
      edad: publicacion.edad,
      tamano: publicacion.tamano,
      personalidad : publicacion.personalidad,
      energia: publicacion.energia,
      esterilizado:publicacion.esterilizado,
      parasitos:publicacion.parasitos,
      vacunas:publicacion.vacunas,
      region:publicacion.region,
      ciudad :publicacion.ciudad,
      observacion:publicacion.observacion,
      idUsuario: this.uid,
      estado:'publicado',
      $idPublicacion: this.firebase.createId(),
    };

    if (publicacion.$idPublicacion) {
      return this.publicacionCol.doc(publicacion.$idPublicacion).update(postObj);
    } else {
      return this.publicacionCol.add(postObj);
    
    }

  }
/*
  seleccionarPublicacion( $idPublicacion: string){
    this.publicaciones.forEach(element => {
      if((element.$idPublicacion) === ( $idPublicacion)){
        element = this.publicacionSelecionada;
        console.log( this.publicacionSelecionada) ;
      }
    });
  }
*/

getPublicacion(id: string): Observable<Publicacion> {
  return this.firebase.collection<Publicacion>('items', ref => ref.where('$idPublicacion', '==', id).limit(1))
   .valueChanges()
   .pipe(
       flatMap(users=> users)
   );
}


  crearPublicacion(publicacion:Publicacion,pubId: string): Promise <void>{
    return new Promise (async (resolve,reject)=>{
      try{
        const id = pubId || this.firebase.createId();
        const data = { id, ...publicacion };
        const result = await this.publicacionCol.doc(id).set(data);
        resolve(result);
      }catch (err){
          reject(err.message);
        }
    });
  }

  ////////////
  getPubliacaciones() {
    this.publicaciones = this.publicacionCol.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Publicacion))
    );
  }

  borrarPublicacion(pubId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.publicacionCol.doc(pubId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  } 
}


