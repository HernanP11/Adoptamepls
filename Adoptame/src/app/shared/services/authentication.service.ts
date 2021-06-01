import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.interfaces';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user$: Observable<any>;
  private loggedIn = new BehaviorSubject <boolean>(false);
  private log :boolean;

    constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
      //super();
      this.log=false;
      this.user$ = this.afAuth.authState.pipe(
        switchMap((user) => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          }
          return of(null);
        })
      );
    
    }

    get isLogged():Observable<boolean>{
      return this.loggedIn.asObservable(); 
    }

   /* losginUser(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('Auth Service: loginUser: success');
                this.router.navigate(['/publicacion']);
            })
            .catch((error) => {
                console.log('Auth Service: login error...');
                console.log('error code', error.code);
                console.log('error', error);
                
                    return { isValid: false, message: error.message };
            });
    }
*/
/*
    signupUser(user: any): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                let emailLower = user.email.toLowerCase(); 
                result.user?.sendEmailVerification()                  // immediately send the user a verification email
            })
            .catch(error => {
                console.log('Auth Service: signup error', error);
                
                  return { isValid: false, message: error.message };
                
                    
                    
            });
    }
 */   
    async loginUser(email: string, password: string): Promise<any> {
      try {
        const { user } = await this.afAuth.signInWithEmailAndPassword(
          email,
          password
        );
        this.loggedIn.next(true);
        return user;
      } catch (error) {
        console.log(error);
      }
    }

    async resetPassword(email: string): Promise<void> {
      try {
        return this.afAuth.sendPasswordResetEmail(email);
      } catch (error) {
        console.log(error);
      }
    }


    async register(email: string, password: string): Promise<any> {
      try {
        const { user } = await this.afAuth.createUserWithEmailAndPassword(
          email,
          password,
        );
        return user;
      } catch (error) {
        console.log(error);
        window.alert("El usuario ya se enceuntra registrado");
      }
    }

    async logout(): Promise<void> {
      try {
        await this.afAuth.signOut();
        this.loggedIn.next(false);
      } catch (error) {
        console.log(error);
      }
    }

    private updateUserData(user: User) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(
        `users/${user.uid}`
      );
  
      const data: User = {
        uid: user.uid,
        email: user.email,
        nombre: user.nombre,
        role: 'PERSONA',
      };
  
      return userRef.set(data, { merge: true });
    }
  }







