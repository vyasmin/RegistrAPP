import { Component, OnInit } from '@angular/core';

/** */
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab-alumn',
  templateUrl: './tab-alumn.page.html',
  styleUrls: ['./tab-alumn.page.scss'],
})
export class TabAlumnPage implements OnInit {

  usuarioid = null;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuarioid = this.route.snapshot.params['id'];
    this.navCtrl.navigateForward(['/tab-alumn/' + this.usuarioid + '/bie-alum/', this.usuarioid]);
  }

  opcion1() {
    this.navCtrl.navigateForward(['/tab-alumn/' + this.usuarioid + '/capturar-qr/', this.usuarioid]);
  };
  opcion2() {
    this.navCtrl.navigateForward(['/tab-alumn/' + this.usuarioid + '/bie-alum/', this.usuarioid]);
  };
  opcion3() {
    this.navCtrl.navigateForward(['/home']);
  };
}
