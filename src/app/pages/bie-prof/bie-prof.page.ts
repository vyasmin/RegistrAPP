import { Component, OnInit } from '@angular/core';

/** */
import { Usuario } from '../model/usuario';
import { ApiService } from 'src/app/api.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bie-prof',
  templateUrl: './bie-prof.page.html',
  styleUrls: ['./bie-prof.page.scss'],
})
export class BieProfPage implements OnInit {

  user: Usuario = {
    nombre: '',
    pass: '',
    tipo: null,
  };
  usuarioid = null;

  constructor(
    private apiService: ApiService,
    private navCtrl: NavController,
    private loading: LoadingController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.cargarUsuario();
  }
  async cargarUsuario() {
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    await loading.present();
    this.apiService.getUno(this.usuarioid).subscribe(resp => {
      loading.dismiss();
      this.user=resp;
    });
  }
}
