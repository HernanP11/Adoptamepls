import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
 
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor(private authService :AuthenticationService) { }
  isLogged = false;
  ngOnInit() {
    this.authService.isLogged.subscribe ((res) => (this.isLogged = res));
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
  onLogout(): void{
    if(confirm("¿ Está seguro que quiere cerrar la sesión ?")){
      this.onSidenavClose();
      this.authService.logout();
      }
  }
}