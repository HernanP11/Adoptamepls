import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//interfaces
import { User } from 'src/app/shared/models/user.interfaces';

//servicios importados
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //declaracion de variables
  hide = true;
  hidere = true;
  checked = false;
  //registroForm: FormGroup;
  roles:string[] = ['PERSONA','FUNDACION'];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //constructor
  constructor(private router: Router, private authService :AuthenticationService, private fb:FormBuilder) {  }
  
  registroForm = this.fb.group({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
    'repassword': new FormControl('', Validators.required),
    'role': new FormControl('', Validators.required),
    'nombre': new FormControl('', Validators.required),
  },
  {validators: PasswordValidator});
 

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
      this.router.navigate(['login/confirmaremail']);
    } else if (user) {
      window.alert("contraseña o correo  equivocados");
      //this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/login']);
    
    }
  
  }
}
