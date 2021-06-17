import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { User } from 'src/app/shared/models/user.interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  role:string[];
  loginForm: FormGroup;
  
  //registroUserForm: FormGroup;
  firebaseErrorMessage: string;
  isLoggedIn: boolean;
  hide = true;
  hidel = true;
  


  constructor(private router: Router, private authService :AuthenticationService) {
    this.role=['PERSONA','FUNDACION'];
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
  });

 

  this.firebaseErrorMessage = '';
  this.isLoggedIn=false;

  }

  ngOnInit(): void {
        
  }


async onLogin() {
  const { email, password } = this.loginForm.value;
  try {
    const user = await this.authService.loginUser(email, password);
    if (user) {
      this.checkUserIsVerified(user);
    }
  } catch (error) {
    console.log(error);
  }
}
private checkUserIsVerified(user: User) {
  if (user) {
    this.router.navigate(['/publicacion']);
  } else if (user) {
    window.alert("contraseña o correo  equivocados");
    //this.router.navigate(['/verification-email']);
  } else {
    this.router.navigate(['/login']);
  
  }

}


}

