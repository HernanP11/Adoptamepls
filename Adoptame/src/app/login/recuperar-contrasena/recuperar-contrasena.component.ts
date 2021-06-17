import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})
export class RecuperarContrasenaComponent implements OnInit {


  userEmail = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private authSvc: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Correo enviado');
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
      window.alert('Correo no registrado');
    }
  }

}
