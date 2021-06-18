import { Injectable } from '@angular/core';
//Firebase
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreCollection, docChanges } from '@angular/fire/firestore';
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
  pubDoc='';
  publicaciones: Observable<Publicacion[]>;
  publicacionCol: AngularFirestoreCollection<Publicacion>;
  uid:string;
  private filePath: any;
  private downloadURL: Observable<string> ;
  publicacionFilter: Observable<Publicacion[]> | undefined;


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
      idUsuario: this.authService.uid,
      estado:'publicado',
      $idPublicacion: this.firebase.createId(),
    };

    if (publicacion.$idPublicacion) {
      return this.publicacionCol.doc(publicacion.$idPublicacion).update(postObj);
    } else {
      return this.publicacionCol.add(postObj);
    
    }

  }

//region-especie
  filterByRegionEspecie(especie:string,region:string){
    return this.firebase.collection<Publicacion>('items', ref => ref.where('especie', '==', especie).where('region', '==', region))
    .valueChanges()
  }

  //region
  filterByregion(region: string) {
    return this.firebase.collection<Publicacion>('items', ref => ref.where('region', '==', region))
    .valueChanges()
  };
  //especie
  filterByespecie(especie: string) {
    return this.firebase.collection<Publicacion>('items', ref => ref.where('especie', '==', especie))
    .valueChanges()
  };
  //comunas
  filterByComunas(comunas: string[]) {
    return this.firebase.collection<Publicacion>('items', ref => ref.where('ciudad', 'in', comunas))
    .valueChanges()
  };
  //comuna-region-especie
  filterByAll(region: string,comunas: string[],especie:string){
    return this.firebase.collection<Publicacion>('items', ref => ref.where('especie', '==', especie).where('ciudad', 'in', comunas).where('region', '==', region))
    .valueChanges()
  }
  //region-comuna
  filterByRegionComuna(region: string,comunas: string[]){
    return this.firebase.collection<Publicacion>('items', ref => ref.where('region', '==', region).where('ciudad', 'in', comunas))
    .valueChanges()
  }

  filterById(){
    return this.firebase.collection<Publicacion>('items', ref => ref.where('$iduser', '==', this.authService.uid))
    .valueChanges()
  }


getPublicacion(id: string): Observable<Publicacion> {
  this.getid(id);
  console.log(this.pubDoc,"pub");
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

  getid(id: string){
    this.publicacionCol.snapshotChanges().pipe(
      map(actions =>actions.map(a=>console.log(a.payload.doc.id,"idd"),
       
        )
       )
    )
  }

  borrarPublicacion(pubId: string){
    const id = this.pubDoc;
   this.firebase.collection('items').doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
  } 
}


