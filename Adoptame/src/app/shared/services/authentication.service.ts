import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userLoggedIn: boolean;      // other components can check on this variable for the login status of the user
  private loggedIn = new BehaviorSubject <boolean>(false);


    constructor(private router: Router, private afAuth: AngularFireAuth) {
        this.userLoggedIn = false;

        this.afAuth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
            if (user) {
              this.loggedIn.next(true);
            } else {
              this.loggedIn.next(false);
            }
        });
    }

    get isLogged():Observable<boolean>{
      return this.loggedIn.asObservable(); 
    }

    loginUser(email: string, password: string): Promise<any> {
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

}
