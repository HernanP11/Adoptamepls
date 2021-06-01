import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navegacion/header/header.component';
import { SidenavListComponent } from './navegacion/sidenav-list/sidenav-list.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Firebase
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { AuthenticationService } from './shared/services/authentication.service'
import { PublicacionesService } from './shared/services/publicaciones.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthenticationService,
    PublicacionesService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }