import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.interfaces';
import { first, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument,} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user$: Observable<any>;
  uid: string;
  //public usuario:User;
   loggedIn = new BehaviorSubject <boolean>(false);

    constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
      this.uid='';
      this.user$ = this.afAuth.authState.pipe(
        switchMap((user) => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          return of(null);
        })
      );
    }

    //Esta logeado o el usuario
    get isLogged():Observable<boolean>{
      return this.loggedIn.asObservable(); 
    }

    // i
    async loginUser(email: string, password: string): Promise<any> {
      try {
        const { user } = await this.afAuth.signInWithEmailAndPassword(email,password);
        this.getToken().then( (token) => {
         console.log(token,'token')
         const id = token;
         //this.idUser  = id;
       });
       if(user?.emailVerified!== true){
         this.sendVerificationEmail();
        window.alert('Por favor valida tu correo. Revisa tu bandeja de spam.');
       }else{
        this.loggedIn.next(true);
        console.log (user.uid,"idddd")
        this.uid=user.uid;
        console.log (this.uid,"disssss")
         return user     
       }

      } catch (error) {
        console.log(error);
        window.alert("Contraseña o correo  incorrectos");
      }
    }

    async getToken(){
      try{
        const  user  = (await this.afAuth.currentUser)?.getIdToken(true);
        //this.idUser= user
        return user;

      }catch(error){
        console.log(error);
        return '';
      } 
    }

    async resetPassword(email: string): Promise<void> {
      try {
        return this.afAuth.sendPasswordResetEmail(email);
      } catch (error) {
        console.log(error);
      }
    }

    async sendVerificationEmail(): Promise<void> {
      return (await this.afAuth.currentUser)?.sendEmailVerification();
    }

    //REGISTRAR
    async register(email: string, password: string): Promise<any> {
      try {
        const { user } = await this.afAuth.createUserWithEmailAndPassword(
          email,
          password,
        );
        await this.sendVerificationEmail();
       //await user?.sendEmailVerification();
        return user;
      } catch (error) {
        console.log(error);
        window.alert("El usuario ya se encuentra registrado");
      }
    }

    //Salir de la sesion 
    async logout(): Promise<void> {
      try {
        await this.afAuth.signOut();
        this.loggedIn.next(false);
      } catch (error) {
        console.log(error);
      }
    }
      
    getUsuario(){
      return this.afAuth.authState.pipe(first());
    }

    private updateUserData(user: User) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(
        `users/${user.uid}`
      );
  
      const data: User = {
        uid: user.uid,
        emailVerified: user.emailVerified,
        email: user.email,
        nombre: user.nombre,
        role: 'PERSONA',
      };
      return userRef.set(data, { merge: true });
    }
  }







