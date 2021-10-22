import { Injectable } from '@angular/core';

/* importar librerias */

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(
    private route: Router,
    private storage: Storage,
    private toastCtrl: ToastController,
    private platform: Platform
  ) { 
    this.platform.ready().then(()=>{
      this.ifLogginIn();
    });
  }
  // Si esta logeado o no
  ifLogginIn(){
    this.storage.create();//Iniciar storage
    //intentar buscar el user en el almacenamiento y si esta cambia el estado del behaviorSubjet a true
    this.storage.get('USER').then((Response)=>{
      if(Response){
        this.authState.next(true);
      }
    });
  }
  //Crear un login de acceso
  login(){
    var objeto={
      user_id:'juan',
      user_pass:'1234'
    };
    this.storage.create();
    this.storage.set('USER',objeto).then((Response)=>{
      console.log(objeto);
      this.route.navigate(['tab-alumn']);
      this.authState.next(true);
    });
  }
  // Metodo para salir de login
  logout(){
    this.storage.create();
    this.storage.remove('USER').then(()=>{
      this.route.navigate(['home']);
      this.authState.next(false);
    })
  }
  // verificar si esta logeado
  isAuthenticated():Boolean{
    return this.authState.value;
  }
}
