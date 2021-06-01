import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { LoginComponent } from '../../login/login/login.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isLogged = false;


  constructor( private authService :AuthenticationService) {

   }

  ngOnInit(): void {
    this.authService.isLogged.subscribe ((res) => (this.isLogged = res));
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  onLogout(): void{
    if(confirm("¿ Está seguro que quiere cerrar la sesión ?")){
      this.authService.logout();
      }
  }
}