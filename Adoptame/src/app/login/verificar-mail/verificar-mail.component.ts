import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.interfaces';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-verificar-mail',
  templateUrl: './verificar-mail.component.html',
  styleUrls: ['./verificar-mail.component.scss']
})
export class VerificarMailComponent  implements OnDestroy {
  //public user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthenticationService) {
    
  }

  onSendEmail(): void {
    this.authSvc.sendVerificationEmail();
    window.alert("Se a enviado un nuevo correo con el link de verificacion");
  }

  ngOnDestroy() {
    this.authSvc.logout();
  }
}
