import { Component } from '@angular/core';
/* INPORTACION DE ELEMENTOS */
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private route: Router,
    private platform: Platform,
    private authentSer: AuthenticationService
  ) {
    platform.ready().then(()=>{
      this.inicializar();
    })
  }
  inicializar(){
    this.authentSer.authState.subscribe( state =>{
      if (state) {
        this.route.navigate(['tab-alumn']);
      }else{
        this.route.navigate(['home']);
      }
    });
  }
}
