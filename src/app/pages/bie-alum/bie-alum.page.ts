import { Component, OnInit } from '@angular/core';

/* librerias  */
import { Usuario } from '../model/usuario';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-bie-alum',
  templateUrl: './bie-alum.page.html',
  styleUrls: ['./bie-alum.page.scss'],
})
export class BieAlumPage implements OnInit {
  /** */
  usuarios: Usuario[];
  
  constructor(
    private apiServ: ApiService) {}

  ngOnInit():void {
    this.apiServ.getTodos().subscribe( resp=>{
      this.usuarios = resp;
    })
  }

}
