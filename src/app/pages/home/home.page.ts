//Importacion de componentes
import { Component } from '@angular/core';

//
import { Usuario } from '../model/usuario';
import { ApiService } from 'src/app/api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  usuario: string;
  pass: string;
  array_usuarios: Usuario[];

  // En interior se declaran objetos  a injectar en TypeScrip
  constructor(
    private api: ApiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController
  ) { }

  //
  validar(){
    this.api.getTodos().subscribe(resp=>{
      this.array_usuarios=resp;
      var x=0;
      this.array_usuarios.forEach(item => {
        /*console.log(item.nombre+" - "+item.pass);*/
        if (item.nombre==this.usuario && item.pass==this.pass) {
          console.log("Usuario Validado con nivel:"+item.tipo);
           x=1;
           this.login(item.tipo,item.id);
        }
      });
      if (x==0) {
        this.mensaje();   
      }      
    });
    
  };

  login(nivel:number, id:string){
    console.log(nivel);
    if (nivel>0) {
      if (nivel==1) {
        this.navCtrl.navigateForward(['/tabs/',id]);
      } else {
        this.navCtrl.navigateForward(['/tab-alumn/',id]);
      }
    }

  }
  async mensaje(){
    const toast= await this.toastCrtl.create({
      message:"No existe el usuario o contraseña",
      duration:5000,
      position:'bottom'
    });
    await toast.present();
  }
}
