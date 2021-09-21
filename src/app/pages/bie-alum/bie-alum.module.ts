import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BieAlumPageRoutingModule } from './bie-alum-routing.module';

import { BieAlumPage } from './bie-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BieAlumPageRoutingModule
  ],
  declarations: [BieAlumPage]
})
export class BieAlumPageModule {}
