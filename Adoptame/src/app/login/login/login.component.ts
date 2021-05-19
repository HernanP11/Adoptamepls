import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from '../../shared/models/user.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  firebaseErrorMessage: string;
  isLoggedIn: boolean;

  constructor(private router: Router, private authService :AuthenticationService) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
  });

  this.firebaseErrorMessage = '';
  this.isLoggedIn=false;
  }

  ngOnInit(): void {
        
  }

  loginUser() {
    if (this.loginForm.invalid)
        return;
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result) => {
        if (result == null) {                               // null is success, false means there was an error
            console.log('logging in...');
            this.router.navigate(['/publicacion']);     
            this.isLoggedIn= true;     
             // when the user is logged in, navigate them to dashboard
        }
        else if (result.isValid == false) {
            console.log('login error', result);
            //this.firebaseErrorMessage = result.message;
        }
    });
}

  
}

