import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BieProfPageRoutingModule } from './bie-prof-routing.module';

import { BieProfPage } from './bie-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BieProfPageRoutingModule
  ],
  declarations: [BieProfPage]
})
export class BieProfPageModule {}
