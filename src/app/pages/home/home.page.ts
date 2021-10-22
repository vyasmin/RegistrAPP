//Importacion de componentes
import { Component } from '@angular/core';
//Importacion de control de formularios

import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // En interior se declaran objetos  a injectar en TypeScrip
  constructor(
    private authentServ: AuthenticationService
  ) { }

 ngOnInit(){

 }
 loginUser(){
   this.authentServ.login();
 }
}
