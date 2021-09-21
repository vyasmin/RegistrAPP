import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CamContrasPageRoutingModule } from './cam-contras-routing.module';

import { CamContrasPage } from './cam-contras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CamContrasPageRoutingModule
  ],
  declarations: [CamContrasPage]
})
export class CamContrasPageModule {}
