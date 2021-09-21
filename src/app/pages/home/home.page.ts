//Importacion de componentes
import { Component } from '@angular/core';
//Importacion de control de formularios
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // En interior se declaran objetos  a injectar en TypeScrip
  constructor() { }

  // variables (nombre:tipo=valor)

  //declaracion de objetos de tipo formulario

  // grupo de controles de personas
  usuario = new FormGroup({
    nom_usuario :new FormControl(''),
    clave :new FormControl('')
  });

  //Arreglos
  lista_usuarios = new Array();
  usua:any;

  //metodos de acceso
  inicio_sesion(){
    console.log(this.usuario.value);

    localStorage.setItem('datos','hola');
  }
}
