import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.interfaces';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  hide = true;
  registroForm: FormGroup;
  constructor(private router: Router, private authService :AuthenticationService) { 
    this.registroForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
  });
  }

  ngOnInit(): void {
   
  }
  async onRegister() {
    const { email, password} = this.registroForm.value;
    console.log(this.registroForm.value);
    try {
      const user = await this.authService.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      window.alert("usuario registrado");
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
