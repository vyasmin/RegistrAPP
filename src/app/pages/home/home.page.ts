//Importacion de componentes
import { Component } from '@angular/core';
//Importacion de control de formularios

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from '../model/usuario.interfaces';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // En interior se declaran objetos  a injectar en TypeScrip
  constructor(
    private authentServ: AuthenticationService,
    private toastCtrl: ToastController,
    private apiServ: ApiService
  ) {
  }

  ngOnInit() {
  }

  user: Usuario = {
    nombre: '',
    pass: ''
  };

  loginUser() {
    console.log(this.user);
    if (this.user.nombre == "juan" && this.user.pass == "1234") {
      this.authentServ.login();
    } else {
      this.toastCtrl.create({
        message: 'Usuario o clave incorrecta',
        duration: 2000,
        position: 'bottom'
      }).then((toast) => {
        toast.present();
      });
    }
  }

  recuperar(){
    this.apiServ.getPosts().subscribe(
      (resp)=> {
        console.log(resp);
      }, (error) => {
        console.log(error);
      }
    )
  }
}
