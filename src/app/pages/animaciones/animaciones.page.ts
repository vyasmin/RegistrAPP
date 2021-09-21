import { Component, OnInit } from '@angular/core';

import { AnimationController,Animation } from '@ionic/angular';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.page.html',
  styleUrls: ['./animaciones.page.scss'],
})
export class AnimacionesPage implements OnInit {

  constructor(private animationCtrl : AnimationController) { }

  ngOnInit() {
  }

}
